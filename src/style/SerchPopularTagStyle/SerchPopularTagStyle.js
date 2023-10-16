import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
import { Fonts, SF, SH, SW } from '../../Utiles';

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default SerchPopularTagStyle = (Colors) => StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent"
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: SH(11),
  },
  titleStyle: {
    color: Colors.white_text_color,
    fontWeight: "bold",
    fontSize: SF(18)
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  homeheadertext: {
    color: Colors.white_text_color,
    fontWeight: '700',
    fontSize: SF(25),
    marginTop: SH(55),
  },
  whilistminbody: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '8%',
    paddingBottom: '80%',
  },
  populartagstyle: {
    fontFamily: 'DMSans-Bold',
    color: Colors.theme_backgound,
    fontSize: SF(20),
    borderBottomColor: Colors.theme_backgound,
  },
  businessstyle: {
    borderBottomColor: SH(1),
    width: '100%',
    borderBottomColor: Colors.red_color_set
  },
  flexdirectioninputsearchtab: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal:SH(15),
    justifyContent: 'center',
    position:'relative',
    top:25
  },
  inputbgcolorwhite: {
    backgroundColor: Colors.white_text_color,
    paddingLeft: SH(60),
    color: Colors.black_text_color,
    paddingRight: SH(30),
    flexDirection: 'row',
    justifyContent: 'center',
    width: '89%',
    marginRight: '5.5%',
    marginTop: '30%',
    borderRadius: SH(100),
    height: SH(45),
  },
  iconstyleseacrch: {
    position: 'relative',
    top: '34%',
    left: '27%',
    zIndex: 10,
    fontWeight: '700',
  },
  populartagstext: {
    fontFamily: Fonts.DMSans_Medium,
    color: 'hsl(214.3, 83.2%, 51%)',
    fontSize: SF(20),
    borderBottomColor: Colors.black_text_color,
  },
  businessgraytextsetborderbottom: {
    fontSize: SF(18),
    borderBottomWidth: SH(0.5),
    paddingBottom: SH(8),
    marginTop: '4%',
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
  },
  businessgraytextsetone: {
    fontSize: SF(18),
    marginTop: '4%',
    fontFamily: Colors.DMSans_Medium,
    color: Colors.black_text_color,
  },
  businessgraytextset: {
    fontSize: SF(18),
    marginTop: '6%',
    borderBottomWidth: SH(0.5),
    paddingBottom: SH(10),
    color: Colors.black_text_color,
  },
  rightsidesetpadding: {
    marginRight: SH(15),
  },
  flexsewtrwo: {
    flexDirection: 'row'
  }
});