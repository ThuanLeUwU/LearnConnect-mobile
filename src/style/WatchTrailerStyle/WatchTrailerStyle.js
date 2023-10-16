
import { StyleSheet, Dimensions } from 'react-native';
import { Colors, SF, SW, SH, Fonts } from '../../Utiles';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export default WatchTrailerStyle = (Colors) => StyleSheet.create({

  navContainer: {
    height: HEADER_HEIGHT,
    paddingTop: Platform.OS === 'ios' ? SH(5) : 0,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent"
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: SH(11),
  },
  hoveraerrorset: {
    width: SW(65),
    paddingTop: Platform.OS === 'ios' ? 27 : 15,
    height: SW(65),
    paddingLeft: SH(10),
  },
  minviewvideo: {
    width: '100%',
    height: '100%',
  },
  overviewtabminview: {
    width: '93%',
    marginHorizontal: '3%',
    marginTop: '10%'
  },
  whiteboxwhishlist: {
    backgroundColor: 'white',
    width: '100%',
    borderBottomWidth: SH(0.5),
    paddingBottom: SH(18),
  },
  whiteboxwhishlistTwo: {
    width: '100%',
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: SH(15),
    paddingRight: Platform.OS === 'ios' ? SH(15) : 0,
    alignItems: 'center',
  },
  textviewsetwhishlist: {
    width: '70%',
    paddingRight: SH(20),
  },
  designfonttext: {
    fontSize: SF(16),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    width: '100%'
  },
  dolardigittext: {
    fontSize: SF(15),
    width: '100%',
    marginTop: '3%',
    marginBottom: '2%',
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    right: SH(5),
  },
  overviewtabminview: {
    width: '93%',
    marginHorizontal: '3%',
    marginTop: '10%'
  },
  trailertextset: {
    color: Colors.black_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(24),
  },
  paregraphtext: {
    fontSize: SF(18),
    paddingVertical: SH(15),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
  },
  imagstyleset: {
    width: SW(120),
    height: SW(120),
    marginRight: SH(10),
    borderRadius: SH(7),
  },
  container: {
    flex: 1,
    width: '100%'
  },
  toolbar: {
    marginTop: SH(30),
    backgroundColor: Colors.white_text_color,
    padding: SH(10),
    borderRadius: SH(5),
  },
  mediaPlayer: {
    position: 'absolute',
    top: SH(0),
    left: SH(0),
    bottom: SH(0),
    right: SH(0),
  },
  nindivset: {
    width: '100%'
  },
  backgroundVideo: {
    height: SH(300),
    width: '100%',
  },
  mediaControls: {
    width: screenHeight - 170,
    height: '100%',
    flex: 1,
    alignSelf: Platform.OS === 'android' ? screenHeight < 800 ? 'center' : 'flex-start' : 'center',
  },
  backgroundVideoFullScreen: {
    height: screenHeight,
    width: screenWidth,
  },
  titleStyle: {
    width: '100%',
  },
  iconlessthanback: {
    position: 'relative',
    top: SH(-7),
  },
  locakedtextrstyle: {
    fontSize: SF(16.5),
    color: Colors.theme_backgound,
    marginTop: '3%',
    fontFamily: Fonts.DMSans_Medium,
  }
});
