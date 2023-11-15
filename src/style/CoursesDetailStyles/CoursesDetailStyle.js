import { Fonts, SF, SH, SW } from '../../Utiles';
import { StyleSheet } from 'react-native';

export default CoursesDetailStyle = (Colors) => StyleSheet.create({
    overviewtabminview: {
        width: '93%',
        marginHorizontal: '3%',
        marginTop: '10%'
    },
    buttonStyle: {
        backgroundColor: Colors.white_text_color,
    },
    buttonTextStyle: {
        color: Colors.theme_backgound,
    },
    textpacregraph: {
        color: Colors.theme_backgound,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(20),
    },
    loremlongparegraph: {
        paddingTop: '5%',
        fontSize: SF(18),
        borderBottomWidth: SH(2),
        borderBottomColor: Colors.gray_text_color,
        paddingBottom: SH(15),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.black_text_color,
    },
    textCoursesDetailStylefonts: {
        color:Colors.theme_backgound,
        fontFamily:Fonts.DMSans_Medium,
        fontSize:SF(19)
    },
    scetiontwoview: {
        width: '100%',
        marginTop: '5%',
        borderBottomWidth: SH(2),
        borderBottomColor: Colors.gray_text_color,
        paddingBottom: SH(17),
        marginBottom: SH(17),
    },
    flexrowiconandtextview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: '5%',
        paddingHorizontal: '3%',
    },
    marginrightset: {
        color: Colors.black_text_color,
        marginRight: SH(20),
    },
    textsetvideo: {
        color: Colors.black_text_color,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(17),
    },
    textpacregraphtwo: {
        color: Colors.theme_backgound,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(18),
    },
    roundimagtitletextset: {
        justifyContent: 'center',
        width: '100%',
        color: Colors.white_text_color,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: SF(18),
        top: '70%',
        left: '12%',
        fontWeight: '700',
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        height: SH(65),
        paddingRight: SH(20),
        alignItems: 'center'
    },
    hoveraerrorset: {
        width: SW(60),
        paddingLeft: SH(10),
    },
    backarrowwork: {
        flexDirection: 'row',
    },
    plusiconandtextview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    computerscrimceview: {
        width: '100%',
        paddingLeft: SH(20),
        paddingRight: SH(25),
        marginTop: SH(50),
    },
    computertext: {
        color: Colors.white_text_color,
        fontSize: SF(17),
        marginBottom: SH(5),
        fontFamily: Fonts.DMSans_Medium,
        marginRight: SH(10),
    },
    flexrowvideoicon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    longtextset: {
        fontSize: SF(23),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.white_text_color,
    },
    buttonTextStyleSignWithNumbertwosetvi: {
        color: Colors.white_text_color,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(30),
        marginRight: SH(20),
    },
    buttonTextStyleSignWithNumber2twodeo: {
        color: Colors.theme_backgound,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(30),
        marginRight: SH(20),
    },
    longtextsetdigit: {
        fontSize: SF(20),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.white_text_color,
        paddingTop: SH(10)
    },
    flexrowsetus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: SH(20),
    },
    buttonsetwatch: {
        borderWidth: SH(1),
        backgroundColor: Colors.white_text_color,
        width: '100%',
        borderRadius: SH(222),
        height: SH(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteboxwhishlist: {
        width: '100%',
        height: SH(55),
        paddingHorizontal: SH(20),
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: Colors.black_text_color,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 5 : 25,
        elevation: 1,
    },
    tabsettext: {
        fontSize: SF(18),
        color: Colors.theme_backgound,
        fontFamily: Fonts.DMSans_Medium,
    },
    bordersetactive: {
        position: 'absolute',
        borderBottomColor: Colors.theme_backgound,
        borderBottomWidth: 2,
        height: Platform.OS === 'ios' ? 3 : 3,
        width: SW(130),
        top: Platform.OS === 'ios' ? -3 : -3,
        backgroundColor: Colors.theme_backgound,
    },
    bordersetactivetwo: {
        position: 'absolute',
        borderBottomColor: Colors.theme_backgound,
        borderBottomWidth: SW(2),
        height: Platform.OS === 'ios' ? 3 : 3,
        width: SW(110),
        top: Platform.OS === 'ios' ? -3 : -3,
        right: SH(110),
        backgroundColor: Colors.theme_backgound,
    },
    bordersetactivethree: {
        position: 'absolute',
        borderBottomColor: Colors.theme_backgound,
        borderBottomWidth: SH(2),
        height: Platform.OS === 'ios' ? SH(3) : SH(3),
        width: SW(110),
        top: Platform.OS === 'ios' ? SH(-3) : SH(-3),
        right: SH(0),
        backgroundColor: Colors.theme_backgound,
    },
    positionabsolutesetbutton: {
        position: 'absolute',
        bottom: SH(0),
        backgroundColor: Colors.white_text_color,
        width: '100%',
        paddingVertical: SH(10),

        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 5 : 25,
        elevation: 1,
    },
    setbuttonwidthview: {
        width: '30%',
    },
    dolardtextset: {
        color: Colors.black_text_color,
        fontSize: SF(25),
        fontFamily: Fonts.DMSans_Medium,
    },
    textcenyet: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '30%'
    },
    disprictionstyle: {
        fontSize: SF(18),
        color: Colors.theme_backgound,
        fontFamily: Fonts.DMSans_Medium,
    },
    borderlineone: {
        position: 'absolute',
        borderBottomColor: Colors.theme_backgound,
        borderBottomWidth: SH(2),
        height: Platform.OS === 'ios' ? SH(3) : SH(3),
        width: SW(130),
        top: Platform.OS === 'ios' ? SH(-3) : SH(-3),
        backgroundColor: Colors.theme_backgound,
    },
    borderlineonetwo: {
        position: 'absolute',
        borderBottomColor: Colors.theme_backgound,
        borderBottomWidth: SH(2),
        height: Platform.OS === 'ios' ? SH(3) : SH(3),
        width: SW(110),
        top: Platform.OS === 'ios' ? -3 : -3,
        right: SH(110),
        backgroundColor: Colors.theme_backgound,
    },
    borderlineonethree: {
        position: 'absolute',
        borderBottomColor: Colors.theme_backgound,
        borderBottomWidth: SH(2),
        height: Platform.OS === 'ios' ? SH(3) : SH(3),
        width: SW(110),
        top: Platform.OS === 'ios' ? SH(-3) : SH(-3),
        right: SH(0),
        backgroundColor: Colors.theme_backgound,
    },
    textstylesfonts: {
        color: Colors.theme_backgound,
        fontFamily: Fonts.DMSans_Medium,
        fontSize: SF(18),
    },
    accountbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: SH(20)
    },
    setheart: {
        color: Colors.theme_backgound,
    },
});
