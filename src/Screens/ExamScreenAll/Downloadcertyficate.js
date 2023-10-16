import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, KeyboardAvoidingView, } from "react-native";
import { Button, Container, Lottie } from "../../Components";
import { Style, DownloadCertificateStyle } from "../../style";
import images from "../../index";
import { RouteName } from "../../routes";
import { useTranslation } from "react-i18next";

const Downloadcertyficate = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DownloadCertificateStyles = useMemo(() => DownloadCertificateStyle(Colors), [Colors]);
    return (
        <Container>
            <View style={DownloadCertificateStyles.minstyleviewphotograpgytwo}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.scrollviewstyles}>
                    <KeyboardAvoidingView enabled>
                        <View style={DownloadCertificateStyles.keybordtopviewstyle}>
                            <View style={DownloadCertificateStyles.minflexview}>
                                <View style={DownloadCertificateStyles.minviewsigninscreen}>
                                    <View style={DownloadCertificateStyles.succefullimgviewsrtwo}>
                                        <Lottie source={images.Congratulation_Animation} />
                                    </View>
                                    <Text style={DownloadCertificateStyles.accounttext}>{t("photography_Title_57")}</Text>
                                    <Text style={DownloadCertificateStyles.accounttextsuccessfully}>{t("photography_Titles_29")}</Text>
                                    <View style={DownloadCertificateStyles.accountbutton}>
                                        <Button title={t("photography_Titles_30")}
                                            onPress={
                                                () => navigation.navigate(RouteName.EXAM_MARKSHEET_NUMBER)
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </Container>
    );
};

export default Downloadcertyficate;
