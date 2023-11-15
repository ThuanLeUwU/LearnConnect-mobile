import { StyleSheet, Dimensions } from 'react-native';
import { SH, SW, SF, Fonts, SCREEN_WIDTH } from '../../Utiles';

export default CoursesStyle = (Colors) => StyleSheet.create({
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
        width: '92%',
        marginHorizontal: '4%',
        marginTop: '0%',
    },
    whiteboxwhishlist: {
        backgroundColor: Colors.white_text_color,
        width: '100%',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SH(7),
        shadowColor: Colors.black_text_color,
        marginBottom: SH(12),
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
    },
    flexDirectiwhilist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        paddingHorizontal: '2.5%',
        paddingVertical: '2.5%'
    },
    textviewsetwhishlist: {
        width: SCREEN_WIDTH * 0.85 - SW(100),
    },
    flexrowheart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97.5%',
    },
    setheart: {
        color: Colors.theme_backgound,
    },
    designfonttext: {
        fontSize: SF(17),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.black_text_color,
        width: '80%'
    },
    dolardigittext: {
        fontSize: SF(17),
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.black_text_color,
        flexDirection: 'column',
        textAlign: 'right',
        width: '100%',
        marginTop: '3%',
    },
    onlydigittext: {
        fontSize: SF(16),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.gray_text_color,
        marginTop: '3%',
        marginRight: '3%'
    },
    stariconstyle: {
        color: 'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        marginTop: '2%',
    },
    chengecolorstyle: {
        color: 'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        position: 'relative',
        fontSize: SF(18),
        top: SH(2),
    },
    stariconview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '49%',
    },
    imagesetios: {
        marginRight: '5%',
        width: SW(100),
        height: SW(100),
        borderRadius: SH(7),
    },
    setstartanddolardtext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: SH(0),
        width: '97.5%'
    },
    setreviewstext: {
        fontSize: SF(12),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.black_text_color,
        width: '95%',
        position: 'relative',
        top: SF(0),
    }

});