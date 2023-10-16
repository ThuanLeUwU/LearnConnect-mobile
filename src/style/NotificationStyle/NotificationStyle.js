import { StyleSheet } from 'react-native';
import { SF, SW, SH, Fonts } from '../../Utiles'

export default NotificationStyle = (Colors) => StyleSheet.create({
    keybordtopviewstyle: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    minstyleviewphotograpgy: {
        height: '100%',
        width: '100%',
    },
    minviewsigninscreen: {
        width: '95%',
        marginHorizontal: '2.3%',
        marginTop: '0%',
    },
    whiteboxwhishlist: {
        backgroundColor: Colors.white_text_color,
        width: '100%',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SH(5),
        shadowColor: Colors.black_text_color,
        marginBottom: SH(12),
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 5 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
    },
    flexDirectiwhilist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: SH(10),
        paddingVertical: SH(15),
        alignItems: 'center',
    },
    textviewsetwhishlist: {
        width: '70%',
        paddingRight: SH(10),
    },
    designfonttext: {
        fontSize: SF(18),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.black_text_color,
        width: '100%'
    },
    dolardigittext: {
        fontSize: SF(14),
        fontFamily: Fonts.DMSans_Medium,
        width: '100%',
        marginTop: '3%',
        color: Colors.black_text_color,
    },
    onlydigittext: {
        fontSize: SF(16),
        fontWeight: '700',
        color: Colors.gray_text_color,
        marginTop: '3%',
        marginRight: '3%'
    },
    stariconstyle: {
        color: 'black',
        flexDirection: 'row',
        marginTop: '2%',
    },
    stariconview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    imgbgcolorset: {
        backgroundColor: Colors.theme_backgound,
        width: SW(80),
        height: SW(80),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SH(100),
    },
    notificationimageview: {
        backgroundColor: Colors.theme_backgound,
        width: SW(80),
        height: SW(80),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SH(100),
    },
    imagestyle: {
        backgroundColor: Colors.theme_backgound,
        width: SW(80),
        height: SW(80),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SH(100),
    }
});