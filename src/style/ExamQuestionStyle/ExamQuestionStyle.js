
import { StyleSheet, Dimensions } from 'react-native';
import { SH, SW, SF, Fonts } from '../../Utiles';

export default ExamQuestionStyle = (Colors) => StyleSheet.create({
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
    width: '95%',
    marginHorizontal: '2.5%',
    marginTop: '2%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bgcolorsetview: {
    backgroundColor: 'hsl(214.3, 83.2%, 51%)',
    width: '100%',
    borderRadius: SH(222),
    paddingVertical: SH(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: SH(15),
    alignItems: 'center',
    paddingRight: SH(15),
  },
  volortext: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    width: SW(70),
  },
  pushiconstyle: {
    color: Colors.white_text_color,
  },
  flexrowsetpushicon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonTextStyleSignWithNumber: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  buttonTextStyleSignWithNumber2: {
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
  },
  buttonset: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: Colors.white_text_color,
    width: '100%',
    borderRadius: SH(222),
    height: SH(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  submitbuttonstyleset: {
    width: '40%',
  },
  textcolorset: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    width: '96%',
  },
  textcolorset1: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    marginRight: SH(15),
    fontSize: SF(17),
  },
  flexroesetus: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  optionview: {
    width: '100%',
    paddingBottom: SH(20),
    marginTop: SH(20),
  },
  minviewalloption: {
    marginTop: '10%',
  },
  optiontextset: {
    backgroundColor: 'white',
    width: SW(40),
    height: SW(40),
    borderRadius: SH(220),
    shadowColor: Colors.black_text_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 25.00,
    elevation: 5,
    marginRight: SH(15),
  },
  inputspaceset: {
    marginTop: '8%'
  },
  clikoptioninselect: {
    color: 'black',
    fontFamily: 'DMSans-Medium',
    fontSize: SF(20),
  },
  textsetwidth: {
    width: '80%',
  },
  paregraphtextset: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15)
  },
  buttonflexminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SH(30),
    marginHorizontal: '5%'
  },
  buttontextcoloset1: {
    backgroundColor: Colors.white_text_color,
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(18),
  },
  buttontextcoloset2: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(18),
  },
  rediobuttonstylre: {
    marginTop: SH(5),
    marginRight: SH(-10),
  },
  flexDirectionrow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
    marginTop: '1%'
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '1%',
    marginBottom: '0%',
  },
  circle: {
    height: SW(20),
    width: SW(20),
    borderRadius: SH(10),
    borderWidth: SH(2),
    marginRight: '2%',
    borderColor: 'hsl(214.3, 83.2%, 51%)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: SW(13),
    height: SW(13),
    borderRadius: SH(7),
    backgroundColor: 'hsl(214.3, 83.2%, 51%)',
  },
  userdetailstext: {
    color: Colors.black_text_color,
    fontSize: SF(16),
    fontWeight: '700',
    marginStart: '1.5%',
    width: '90%',
  },
  flexroewsetandborder: {
    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    borderWidth: SH(1),
    paddingVertical: SH(15),
    paddingHorizontal: SH(10),
    marginBottom: SH(15),
    borderRadius: SH(5),
    borderColor: 'hsl(214.3, 83.2%, 51%)',
  },
  questionContainer: {
    marginTop: SH(15),
    marginBottom: SH(0),
  },
  flexsetadd: {
    flexDirection: 'row',
    width: '95%',
    marginTop: SH(10),
  },
  answerText: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(15),
    paddingRight: SH(25),
  },
  radiobuttonsetstyle: {
    width: '100%',
  },
  radiobuttonsetstyles: {
    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    borderWidth: SH(1),
    paddingVertical: SH(17),
    paddingHorizontal: SH(10),
    marginBottom: SH(15),
    borderRadius: SH(5),
    borderColor: Colors.theme_backgound,
  },
  radiobuttonlableview: {
    height: SW(20),
    width: SW(20),
    borderRadius: SH(10),
    borderWidth: SH(2),
    marginRight: '2%',
    borderColor: Colors.theme_backgound,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lableradionstyle: {
    width: SW(13),
    height: SW(13),
    borderRadius: SH(7),
    backgroundColor: Colors.theme_backgound,
  },
  propsminview: {
    backgroundColor: Colors.theme_backgound,
    width: '100%',
    borderRadius: SH(222),
    paddingVertical:SH(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:SH(15),
    alignItems: 'center',
  },
  buttonstyles: {
    backgroundColor:Colors.white_text_color,
    borderRadius:SH(300),
    height:SH(50)
  }
});
