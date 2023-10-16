
import { StyleSheet, } from 'react-native';
import { widthPercent, SW, SH, SF, Fonts } from '../../Utiles';

export default ExamMarksheetStyle = (Colors) => StyleSheet.create({

  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',

  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '92%',
    marginHorizontal: '5%',
    marginTop: '0%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  whiteboxwhishlist: {
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    marginRight: SH(15),
    paddingRight: Platform.OS === 'ios' ? 40 : 0,
    borderRadius: SH(5),
    paddingVertical: SH(10),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  questionpapewrset: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    marginRight: SH(15),
    height: SH(40),
    paddingRight: Platform.OS === 'ios' ? SH(40) : SH(0),
    borderRadius: SH(5),
    paddingVertical: SH(10),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  flexexamboxview: {
    flexDirection: 'row',
    marginBottom: SH(15),
    height: SH(100),
  },
  questionview: {
    flexDirection: 'row',
    marginBottom: SH(15),
  },
  whiteboxwhishlistmcq: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SH(15),
    borderRadius: SH(7),
    paddingBottom: SH(15),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  boxintitle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    width: '100%'
  },
  boxstyleminview: {
    width: '100%',
    marginBottom: SH(10),
  },
  dotcolorset: {
    backgroundColor: Colors.green_color_set,
    height: SW(25),
    width: SW(25),
    borderRadius: SW(100),
    marginRight: SH(10),
  },
  wrongdot: {
    backgroundColor: Colors.red_color_set,
    height: SW(25),
    width: SW(25),
    borderRadius: SH(100),
    marginRight: SH(10),
  },
  notvisiteddot: {
    backgroundColor: Colors.gray_text_color,
    height: SW(25),
    width: SW(25),
    borderRadius: SH(100),
    marginRight: SH(10),
  },
  reviluterdot: {
    backgroundColor: Colors.blue_text_color,
    height: SW(25),
    width: SW(25),
    borderRadius: SH(100),
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minviewaboxin: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: SH(10),
    paddingBottom: SH(15),
    paddingTop: SH(0),
  },
  dotsetview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%'
  },
  dotsetviewTWO: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  textcolorset: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    color: Colors.black_text_color,
  },
  centerviewset: {
    textAlign: 'center',
    paddingLeft: SH(10),
  },
  answerlastfontsize: {
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(17),
    color: Colors.black_text_color,
  },
  mcqminviewset: {
    marginTop: SH(13),
    marginBottom: SH(25),
  },
  bgvolorsetphysic: {
    backgroundColor: 'hsl(214.3, 83.2%, 51%)',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  physistextset: {
    color: Colors.white_text_color,
    paddingLeft: SH(25),
    paddingVertical: SH(8),
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
  },
  GridViewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(10),
    width: widthPercent(18),
  },
  widthsetround: {
    width: '20.1%',
  },
  bgvolosetdigitall: {
    backgroundColor: Colors.green_color_set,
    height: SW(45),
    width: SW(45),
    borderRadius: SH(222),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgvolosetdigitalltwo: {
    backgroundColor: Colors.red_color_set,
    height: SW(45),
    width: SW(45),
    borderRadius: SH(222),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgvolosetdigitallthree: {
    backgroundColor: Colors.gray_text_color,
    height: SW(45),
    width: SW(45),
    borderRadius: SH(222),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgvolosetdigitallfour: {
    backgroundColor: Colors.blue_text_color,
    height: SW(45),
    width: SW(45),
    borderRadius: SH(222),
    alignItems: 'center',
    justifyContent: 'center',
  },
  GridViewTextLayout: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    paddingRight: SH(3),
  },
  iconstylebox: {
    color: Colors.white_text_color,
  },

});
