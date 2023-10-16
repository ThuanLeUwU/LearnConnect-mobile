import { StyleSheet, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default BuyCoursesStyle = (Colors) => StyleSheet.create({

  navContainer: {
    height: HEADER_HEIGHT,
    height: 65,
  },
  hoveraerrorset: {
    width: 65,
    paddingTop: Platform.OS === 'ios' ? 27 : 15,
    height: 65,
    paddingLeft: 10,
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
    paddingRight: 20,
  },
  flerxdirationplusandtext: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconlessthanback: {
    color: Colors.theme_backgound,
    marginRight: 10,
    position: 'relative',
    top: -8,
  },
  computerscrinceview: {
    width: '100%',
  },
  allheadertitleminview: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  consoledeclopmenttextheader: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'DMSans-Bold',
    top: 15,
    position: 'absolute',
  },
  whiteboxwhishlist: {
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
    shadowColor: "black",
    shadowColor: "black",
    marginBottom: 25,
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  textviewsetwhishlist: {
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
  },
  designfonttext: {
    fontSize: 19,
    fontFamily: 'DMSans-Bold',
    color: 'black',
    width: '100%',
    paddingBottom: '1%'
  },
  dolardigittext: {
    fontSize: 16,
    width: '100%',
    marginTop: '3%',
    fontFamily: 'DMSans-Medium',
    color: 'black',
  },

  onlydigittext: {
    fontSize: 19,
    fontFamily: 'DMSans-Medium',
    color: 'black',
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
  whilistminbody: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '15%',
    marginBottom: 200,
  },
  flexrowyearlybutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  setbuttonwidth: {
    width: '45%',
  },
  backarrowwork: {
    flexDirection: 'row'
  }

});
