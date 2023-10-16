import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../Utiles';

export default EndcallStyle = (Colors) => StyleSheet.create({

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  },
  setflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: SH(50),
  },
  seimagstyleendcall: {
    width: SW(100),
    height: SW(100),
    borderRadius: SH(250),
  },
  flexcentertext: {
    width: '100%',
    marginTop: SH(50),
    marginBottom: SH(30),
  },
  minflexview: {
    width: '90%',
    marginHorizontal: '5%'
  },
  callendtextstyle: {
    color: Colors.theme_backgound,
    textAlign: 'center',
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(17),
  }
});