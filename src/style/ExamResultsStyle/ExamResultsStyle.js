import { SH, SF, Fonts } from '../../Utiles';
import { StyleSheet } from 'react-native';

export default ExamResultsStyle = (Colors) => StyleSheet.create({

  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',

  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  minviewsigninscreen: {
    width: '92%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  examresultsview: {
    flexDirection: 'row',
    paddingBottom: SH(20),
    paddingRight: SH(40),
    width: '100%',
  },
  widthsettext: {
    width: '45%',
    marginRight: SH(20),
  },
  alltextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
  },
  widthsetrighttext: {
    width: '65%',
  },
  textcolorchengeset: {
    color: 'hsl(214.3, 83.2%, 51%)'
  },
  accountbutton: {
    width: '100%',
    marginBottom: SH(15),
    marginTop: SH(25),
  },

  buttonset: {
    borderWidth: SH(1),
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'hsl(216.8, 90.7%, 38%)',
    width: '100%',
    borderRadius: SH(7),
    height: SH(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyleSignWithNumber: {
    backgroundColor: Colors.white_text_color,
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(18),
  },
  buttonTextStyleSignWithNumber2: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(18),
  },
});
