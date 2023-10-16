
import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../Utiles';

export default CreaditCardStyle = (Colors) => StyleSheet.create({

  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  smaili: {
    width: SW(110),
    height: SW(110),
  },
  setstyleinputtext: {
    backgroundColor: Colors.white_text_color,
    paddingHorizontal: SH(15),
    borderRadius: SH(7),
    paddingVertical: SH(15)
  },
  setstyleinputtexttwo: {
    backgroundColor: Colors.white_text_color,
    paddingHorizontal: SH(15),
    borderRadius: SH(7),
    paddingVertical: SH(5),
    width: '48%',
    marginRight: SH(15),
    marginTop: SH(18),
  },
  minviewsigninscreen: {
    width: '95%',
    marginHorizontal: '2.5%',
  },
  inputstyle: {
    padding: SH(0),
    color: Colors.black_text_color,
    width: SW(200),
  },
  textstyle: {
    color: Colors.black_text_color,
  },
  flexrowsetcemera: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexrowsetinput: {
    flexDirection: 'row',
  },
  inputwidthsetnew: {
    width: '50%'
  },
  setbuttonstyle: {
    marginTop: SH(26),
  },
  setwidthimage: {
    height: SH(250),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SH(10),
  },
  bgwhiteinput: {
    backgroundColor: Colors.white_text_color,
    borderColor: Colors.light_gray_text_color,
    fontSize: SF(18),
  },
  creditcard: {
    height: SH(230),
    flexDirection: 'row',
    justifyContent: 'center',
    width: SW(420),
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  },
  placeholdertext: {
    fontSize: SF(12)
  }
});
