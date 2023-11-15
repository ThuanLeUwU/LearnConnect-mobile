import { WebView } from "react-native-webview";
import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import { RouteName } from "../../routes";
import { useTranslation } from "react-i18next";
import { Container } from '../../Components';
import axios from "axios";
import {useSelector} from 'react-redux';


const VnPaySceeen = (props) => {
	const { t } = useTranslation();
	const { navigation, route } = props;
	const {token, userLogin} = useSelector(state => state.authReducer) || {};
	const [paymentUrl, setPaymentUrl] = useState('');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    useEffect(() => {
        const course = route?.params?.course;
        const returnUrl = 'https://learnconnectapitest.azurewebsites.net';
		const getPaymentUrl = async () => {
            console.log('api url: ',`https://learnconnectapitest.azurewebsites.net/api/enrollment/Enroll?userId=${userLogin.id}&courseId=${course.id}&returnUrl=${returnUrl}`)
            await axios.post(`https://learnconnectapitest.azurewebsites.net/api/enrollment/Enroll?userId=${userLogin.id}&courseId=${course.id}&returnUrl=${returnUrl}`)
                .then(res => {
                console.log('PaymentUrl: ', res?.data);
                if(res?.data){
                    setPaymentUrl(res?.data);
                } else {
                    navigation.navigate(RouteName.CONGREJULATION_SCREEN,{course:course})
                }
                })
			.catch(err => console.log('Error at getPaymentUrl(): ', err));
		};
		getPaymentUrl();
    }, [navigation]);
    
    const parseUrl = (url) => {
        const params = url.split('/?')[1].split('&');
        const returnParams = {};
        for (const param of params) {
            const [key, value] = param.split('=');
            returnParams[key] = decodeURIComponent(value);
        }

        return returnParams;
    };

    const handleNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    console.log('url1111: ', url);

    if (url && url.includes('azurewebsites.net/?')) {
        const  query  = parseUrl(url);
        const transactionId = query['vnp_TxnRef'];
        const transactionDate = query['vnp_PayDate'];
        console.log('transactionId: ', transactionId);
        console.log('transactionDate: ', transactionDate);
		const getPaymentResult = async () => {
		    await axios.get(`https://learnconnectapitest.azurewebsites.net/api/payment-transaction/query-vnpay-transaction?vnp_TxnRef=${transactionId}&vnp_PayDate=${transactionDate}`)
                .then(res => {
                    console.log('Payment result: ', res?.data);
                    navigation.navigate(RouteName.CONGREJULATION_SCREEN,{
                        data:res?.data
                    });
                })
                .catch(err => console.log('Error at getPaymentResult(): ', err));
		};
		getPaymentResult();
        // navigation.goBack();
    }
    
    // navigation.navigate(RouteName.HOME_SCREEN);
    };

	return (
		<Container>
            <WebView
                source={{ uri: paymentUrl}}
                onNavigationStateChange={handleNavigationStateChange}
            />
		</Container>
	);
};

export default VnPaySceeen;