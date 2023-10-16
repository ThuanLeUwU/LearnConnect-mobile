import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../Utiles';

export default VideocallStyle = (Colors) => StyleSheet.create({
    flex: {
        flex: 1,
    },
    setbgimage: {
        height: '100%',
        borderRadius: SH(0),
        width: '100%',
        position: 'absolute',
    },
    setusertopimage: {
        height: SW(150),
        width: SW(150),
        borderRadius: SH(7),
    },
    flexrowtextimage: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        top: SH(50),
        justifyContent: 'space-between',
        paddingTop: SH(17),
    },
    flexrowsetaudiocall: {
        height: '100%',
        width: '100%'
    },
    calldirationstyle: {
        color: Colors.white_text_color,
        padding: SH(9),
        borderRadius: SH(100),
        fontSize: SF(16),
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Medium,
    },
    seticonandtextflex: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: SH(10),
    },
    setlockicon: {
        position: 'relative',
        top: SH(8),
        left: SH(5),
    },
    setwhitetextnornal: {
        color: Colors.white_text_color,
        fontSize: SF(16),
        fontFamily: Fonts.Poppins_Medium,
        position: 'relative',
        top: SH(-4),
    },
    seticonview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '92%',
        marginHorizontal: '3%',
    },
    seticonviewsettwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: '4%',
    },
    iconpositionset: {
        backgroundColor: 'red',
        height: SW(40),
        width: SW(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SH(200),
    },
    microphone: {
        backgroundColor: Colors.gray_text_color,
        height: SW(40),
        width: SW(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SH(200),
    },
    bottomiconnamestyle: {
        color: Colors.theme_backgound,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(16),
        textAlign: 'center',
        paddingTop: SH(10),
    },
    iconpositionsettext: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: SH(10),
    },
    setmutecolortext: {
        color: Colors.white_text_color,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(14),
        textAlign: 'center',
        paddingTop: SH(10),
    },
    setmutecolortexttwo: {
        color: Colors.white_text_color,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(18),
        position: 'relative',
        left: SH(7),
    },
    buttoncolorset: {
        backgroundColor: Colors.light_gray_text_color,
    },
    setbuttontrxt: {
        color: Colors.white_text_color,
    },
    minbuttonview: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: SH(30),
    },
    setcemeratextstyle: {
        color: Colors.white_text_color,
        marginLeft: SH(10),
        fontFamily: Fonts.DMSans_Medium,
    },
    spekerimage: {
        tintColor: Colors.white_text_color,
        width: SW(30),
        height: SW(30),
    },
    usernametext: {
        color: Colors.white_text_color,
        fontSize: SF(30),
        fontFamily: Fonts.DMSans_Medium,
    },
    setbgcolorflexrow: {
        flexDirection: 'row'
    },
    flextwobutton: {
        flexDirection: 'row',
        width: '47.5%',
        marginTop: '5%'
    },
    setspacediv: {
        position: 'absolute',
        bottom: SH(0),
        paddingTop: SH(20),
        borderTopLeftRadius: SH(20),
        borderTopRightRadius: SH(20),
        paddingBottom: SH(15),
        backgroundColor: Colors.white_text_color,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 10,
    },
    container: {
        width: '100%',
        height: '100%',
    },
    viewtextStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    minstyleviewphotograpgy: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.theme_backgound,
    },
    imagsetstyle: {
        width: SW(81),
        height: SW(100),
        borderRadius: SH(7),
    },
    textcenterview: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        top: SH(-30),
        left: SH(-7),
    },
    minflexview: {
        width: '100%',
        height: '100%',
    },
    minviewsigninscreen: {
        width: '100%',
        height: '100%',
    },
    twoimagewisth: {
        width: '23%',
    },
    setmuteicon: {
        position: 'absolute',
        bottom: SH(30),
        backgroundColor: Colors.gray_text_color,
        width: SW(30),
        height: SW(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        right: SH(10),
        borderRadius: SH(100),
    },
    graphimagstyle: {
        width: '100%',
        height: SH(300),
        resizeMode: 'contain'
    },
    setpaddingright: {
        width: '100%'
    },
    seticonviewandtextwidthset: {
        width: SW(60),
        justifyContent: 'center',
        alignItems: 'center',
    },
    spekerimafgeset: {
        tintColor: Colors.white_text_color,
        width: SW(20),
        height: SW(20),
    },
    startrecordingmetting: {
        backgroundColor: Colors.white_text_color,
        width: SW(110),
        height: SW(35),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SH(100),
    },
    timeviewstyle: {
        borderWidth: SH(1),
        height: SW(27),
        width: SW(27),
        borderColor: Colors.theme_backgound,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SH(100),
    },
    digittextstyle: {
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(19),
        fontWeight: 'bold',
        marginLeft: SH(10),
        color: Colors.theme_backgound,
    },
    dotsetborder: {
        borderWidth: SH(1),
        height: SW(27),
        width: SW(27),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SH(100),
    },
    setminviewcenterrecording: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SH(20),
        position: 'absolute',
        width: '100%',
        top: SH(0),
        marginBottom: SH(10),
    },
    namestyleset: {
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.white_text_color,
        textAlign: 'center',
        fontSize: SF(14),
    },
    setfourimgcenterview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%',
        marginTop: SH(10),
        marginHorizontal: SH(7)
    },
    setimageviewcenter: {
        marginTop: SH(80),
    },
    nameVideocallStyleet: {
        color:Colors.white_text_color,
        fontFamily:Fonts.DMSans_Medium,
        fontSize:SF(14),
        textAlign:'center',
        paddingTop:SH(3)
    }

});