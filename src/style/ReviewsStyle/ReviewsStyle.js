
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../Utiles';

export default ReviewsStyle = (Colors) => StyleSheet.create({
  MinContentView: {
    width: '100%',
    height: '100%',
    paddingBottom: SH(30),
  },
  MinFlexView: {
    width: '100%',
    height: '100%',
  },
  PostionReView: {
    position: 'relative',
    right: SH(7),
    width: SW(260)
  },
  AccountTextTwo: {
    color: Colors.black_text_color,
    fontSize: SF(23),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  FlexRowStarSignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SH(15),
  },
  AccountTextSuccessfullyTwo: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: SH(20),
    color: Colors.gray_text_color
  },
  InputUnderLineReviews: {
    width: '100%',
  },
  PositionStyleInput: {
    height: SH(100),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  AccountButton: {
    width: '100%',
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  MinViewScreenTwo: {
    height: '100%',
    width: '100%',
    paddingHorizontal: SH(15)
  },
 
});
