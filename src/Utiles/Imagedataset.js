import {Rating, VectorIcons} from '../Components';
import React from 'react';
import images from '../index';
import {SF, Colors} from '../Utiles';
import {RouteName} from '../routes';

export const Swiperdata = [
  {
    key: 's1',
    text: 'Swiper_title_1',
    title: 'Swiper_title_2',
    animation: images.Swiper_First,
    backgroundColor: 'transparent',
  },
  {
    key: 's2',
    text: 'Swiper_title_3',
    title: 'Swiper_title_4',
    animation: images.Swiper_Two,
    backgroundColor: 'transparent',
  },
  {
    key: 's3',
    text: 'Swiper_title_5',
    title: 'Swiper_title_6',
    animation: images.Swiper_Three,
    backgroundColor: 'transparent',
  },
];
export const CarouselItemsFirst = [
  {
    title: 'CarouselItemsFirst_Title_1',
    paregraphtitle: 'CarouselItemsFirst_Title_2',
    imge: images.Home_First_Slide_Image_1,
  },
  {
    title: 'CarouselItemsFirst_Title_3',
    paregraphtitle: 'CarouselItemsFirst_Title_4',
    imge: images.Home_First_Slide_Image_2,
  },
  {
    title: 'CarouselItemsFirst_Title_5',
    paregraphtitle: 'CarouselItemsFirst_Title_6',
    imge: images.Home_First_Slide_Image_3,
  },
  {
    title: 'CarouselItemsFirst_Title_7',
    paregraphtitle: 'CarouselItemsFirst_Title_8',
    imge: images.Home_First_Slide_Image_4,
  },
  {
    title: 'CarouselItemsFirst_Title_9',
    paregraphtitle: 'CarouselItemsFirst_Title_10',
    imge: images.Home_First_Slide_Image_5,
  },
];
export const LanguageDropdownData = [
  {label: 'English', value: 'en'},
  {label: 'Arabic', value: 'ara'},
  {label: 'Spanish', value: 'Spa'},
  {label: 'French', value: 'Fr'},
];
export const HomeImageData = [
  {
    roundimagtitle: 'HomeImageData_Title_1',
    imge: images.Home_First_Slide_Image_7,
  },
  {
    roundimagtitle: 'HomeImageData_Title_2',
    imge: images.Home_First_Slide_Image_8,
  },
  {
    roundimagtitle: 'HomeImageData_Title_3',
    imge: images.Home_First_Slide_Image_9,
  },
  {
    roundimagtitle: 'HomeImageData_Title_4',
    imge: images.Home_First_Slide_Image_10,
  },
  {
    roundimagtitle: 'HomeImageData_Title_5',
    imge: images.Home_First_Slide_Image_11,
  },
  {
    roundimagtitle: 'HomeImageData_Title_6',
    imge: images.Home_First_Slide_Image_12,
  },
  {
    roundimagtitle: 'HomeImageData_Title_7',
    imge: images.Home_First_Slide_Image_13,
  },
];
export const PopularCoursesData = [
  {
    whitebodyimagetext: 'PopularCoursesData_Title_1',
    blacktitle: 'PopularCoursesData_Title_2',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$49',
    imge: images.Home_First_Slide_Image_14,
  },
  {
    whitebodyimagetext: 'PopularCoursesData_Title_3',
    blacktitle: 'PopularCoursesData_Title_4',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$59',
    imge: images.Home_First_Slide_Image_15,
  },
  {
    whitebodyimagetext: 'PopularCoursesData_Title_5',
    blacktitle: 'PopularCoursesData_Title_6',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$59',
    imge: images.Home_First_Slide_Image_16,
  },
  {
    whitebodyimagetext: 'PopularCoursesData_Title_7',
    blacktitle: 'PopularCoursesData_Title_8',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$64',
    imge: images.Home_First_Slide_Image_17,
  },
];
export const NewCoursesData = [
  {
    whitebodyimagetext: 'PopularCoursesData_Title_9',
    blacktitle: 'PopularCoursesData_Title_10',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$59',
    imge: images.Home_First_Slide_Image_18,
  },
  {
    whitebodyimagetext: 'PopularCoursesData_Title_11',
    blacktitle: 'PopularCoursesData_Title_12',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$64',
    imge: images.Home_First_Slide_Image_19,
  },
  {
    whitebodyimagetext: 'PopularCoursesData_Title_13',
    blacktitle: 'PopularCoursesData_Title_14',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$49',
    imge: images.Home_First_Slide_Image_20,
  },
  {
    whitebodyimagetext: 'PopularCoursesData_Title_15',
    blacktitle: 'PopularCoursesData_Title_16',
    rating: <Rating imageSize={17} />,
    blacktitledigit2: '$59',
    imge: images.Home_First_Slide_Image_21,
  },
];
export const InstructorData = [
  {
    username: 'PopularCoursesData_Title_17',
    userjob: 'PopularCoursesData_Title_18',
    rating: <Rating imageSize={17} ratingCount={3} />,
    userrankingtwo: 'PopularCoursesData_Title_19',
    imge: images.Home_First_Slide_Image_22,
  },
  {
    username: 'PopularCoursesData_Title_20',
    userjob: 'PopularCoursesData_Title_21',
    rating: <Rating imageSize={17} ratingCount={3} />,
    userrankingtwo: 'PopularCoursesData_Title_22',
    imge: images.Home_First_Slide_Image_23,
  },
  {
    username: 'PopularCoursesData_Title_23',
    userjob: 'PopularCoursesData_Title_24',
    rating: <Rating imageSize={17} ratingCount={3} />,
    userrankingtwo: 'PopularCoursesData_Title_25',
    imge: images.Home_First_Slide_Image_24,
  },
  {
    username: 'PopularCoursesData_Title_26',
    userjob: 'PopularCoursesData_Title_27',
    rating: <Rating imageSize={17} ratingCount={3} />,
    userrankingtwo: 'PopularCoursesData_Title_28',
    imge: images.Home_First_Slide_Image_25,
  },
  {
    username: 'PopularCoursesData_Title_29',
    userjob: 'PopularCoursesData_Title_30',
    rating: <Rating imageSize={17} ratingCount={3} />,
    userrankingtwo: 'PopularCoursesData_Title_31',
    imge: images.Home_First_Slide_Image_26,
  },
];
export const MyCoursesData = [
  {
    Title: 'My_Courses_Title_1',
    TimeText: 'My_Courses_Title_2',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_3',
    image: images.My_Courses_Image_1,
    PriceText: '$ 54',
  },
  {
    Title: 'My_Courses_Title_4',
    TimeText: 'My_Courses_Title_5',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_6',
    image: images.My_Courses_Image_2,
    PriceText: '$ 84',
  },
  {
    Title: 'My_Courses_Title_7',
    TimeText: 'My_Courses_Title_8',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_9',
    image: images.My_Courses_Image_3,
    PriceText: '$ 64',
  },
  {
    Title: 'My_Courses_Title_10',
    TimeText: 'My_Courses_Title_11',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_12',
    image: images.My_Courses_Image_4,
    PriceText: '$ 94',
  },
  {
    Title: 'My_Courses_Title_13',
    TimeText: 'My_Courses_Title_14',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_15',
    image: images.My_Courses_Image_5,
    PriceText: '$ 79',
  },
  {
    Title: 'My_Courses_Title_15',
    TimeText: 'My_Courses_Title_16',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_17',
    image: images.My_Courses_Image_6,
    PriceText: '$ 60',
  },
  {
    Title: 'My_Courses_Title_18',
    TimeText: 'My_Courses_Title_19',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_20',
    image: images.My_Courses_Image_7,
    PriceText: '$ 70',
  },
  {
    Title: 'My_Courses_Title_21',
    TimeText: 'My_Courses_Title_22',
    rating: <Rating imageSize={17} />,
    VideoText: 'My_Courses_Title_23',
    image: images.My_Courses_Image_8,
    PriceText: '$ 54',
  },
];
export const ExamTabData = [
  {
    Title: 'photography_Titles_4',
    IconMin: (
      <VectorIcons
        icon="Entypo"
        name="creative-cloud"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
    Titletwo: 'photography_Titles_5',
    IconMintwo: (
      <VectorIcons
        icon="Entypo"
        name="code"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
  },
  {
    Title: 'photography_Titles_6',
    IconMin: (
      <VectorIcons
        icon="MaterialCommunityIcons"
        name="head-cog-outline"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
    Titletwo: 'photography_Titles_7',
    IconMintwo: (
      <VectorIcons
        icon="FontAwesome5"
        name="user-cog"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
  },
  {
    Title: 'photography_Titles_8',
    IconMin: (
      <VectorIcons
        icon="FontAwesome5"
        name="cogs"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
    Titletwo: 'photography_Titles_9',
    IconMintwo: (
      <VectorIcons
        icon="FontAwesome5"
        name="people-carry"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
  },
  {
    Title: 'photography_Titles_10',
    IconMin: (
      <VectorIcons
        icon="MaterialCommunityIcons"
        name="google-analytics"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
    Titletwo: 'photography_Titles_11',
    IconMintwo: (
      <VectorIcons
        icon="MaterialCommunityIcons"
        name="desktop-mac-dashboard"
        size={SF(35)}
        color={Colors.theme_backgound}
      />
    ),
  },
];
export const SelectExmaData = [
  {
    Title: 'photography_Titles_12',
    Titletwo: 'photography_Titles_13',
  },
  {
    Title: 'photography_Titles_14',
    Titletwo: 'photography_Titles_15',
  },
  {
    Title: 'photography_Titles_16',
    Titletwo: 'photography_Titles_17',
  },
  {
    Title: 'photography_Titles_18',
    Titletwo: 'photography_Titles_19',
  },
  {
    Title: 'photography_Titles_20',
    Titletwo: 'photography_Titles_21',
  },
  {
    Title: 'photography_Titles_22',
    Titletwo: 'photography_Titles_23',
  },
  {
    Title: 'photography_Titles_24',
    Titletwo: 'photography_Titles_25',
  },
];
export const OnlineClassData = [
  {
    text: 'Online_Class_title_1',
    Datetext: 'Online_Class_title_2',
    buttontitle: 'Online_Class_title_3',
    navigationpass: RouteName.VIDEO_CALL_SCREEN,
    Date: '23/07/2022',
    starttime: 'Online_Class_title_5',
    settime: 'Online_Class_title_6',
    simpleline: '|',
  },
  {
    text: 'Online_Class_title_7',
    buttontitle: 'Online_Class_title_8',
    navigationpass: RouteName.ONLINE_CLASS_SCREEN,
    Datetext: 'Online_Class_title_2',
    Date: '01/06/2022',
  },
  {
    id: 2,
    text: 'Online_Class_title_9',
    Datetext: 'Online_Class_title_2',
    buttontitle: 'Online_Class_title_3',
    Date: '28/02/2022',
    navigationpass: RouteName.VIDEO_CALL_SCREEN,
    starttime: 'Online_Class_title_5',
    settime: 'Online_Class_title_10',
    simpleline: '|',
  },
  {
    id: 3,
    text: 'Online_Class_title_11',
    Datetext: 'Online_Class_title_2',
    buttontitle: 'Online_Class_title_8',
    navigationpass: RouteName.ONLINE_CLASS_SCREEN,
    Date: '12/05/2022',
  },
  {
    id: 4,
    text: 'Online_Class_title_12',
    Datetext: 'Online_Class_title_2',
    buttontitle: 'Online_Class_title_8',
    navigationpass: RouteName.ONLINE_CLASS_SCREEN,
    Date: '21/04/2022',
  },
  {
    id: 5,
    text: 'Online_Class_title_13',
    Datetext: 'Online_Class_title_2',
    Date: '26/10/2022',
    navigationpass: RouteName.VIDEO_CALL_SCREEN,
    starttime: 'Online_Class_title_5',
    settime: 'Online_Class_title_14',
    buttontitle: 'Online_Class_title_3',
    simpleline: '|',
  },
];
export const ChatData = [
  {
    id: 1,
    ChatSelf: 'ChatText_Let_Me',
    ChatTime: '03:16',
    DateText: 'Ten_Oct',
    DateText_Actually: 'Chattext_Actually_I_Have',
    ChatTime_User: '03:18',
  },
  {
    id: 2,
    ChatSelf: 'Chat_Can_You_Just',
    ChatTime: '03:19',
    DateText: 'Ten_Oct',
    DateText_Actually: 'Chat_Multipal_Project',
    ChatTime_User: '03:19',
  },
  {
    id: 3,
    ChatSelf: 'Chat_Excellent',
    ChatTime: '03:20',
    DateText: 'Ten_Oct',
    DateText_Actually: (
      <VectorIcons icon="AntDesign" name="like1" color={'#ffcc5b'} size={35} />
    ),
    icon: (
      <VectorIcons icon="AntDesign" name="like1" color={'#ffcc5b'} size={35} />
    ),
    ChatTime_User: '03:19',
  },
];
export const InstructerData = [
  {
    id: 1,
    image: images.videocall_one_img,
    icon: 'dot-fill',
    colors: Colors.green_dot_color,
    text: 'Instructor_Title_32',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_33',
  },
  {
    id: 2,
    image: images.videocall_two_img,
    icon: 'dot-fill',
    colors: Colors.red_color_set,
    text: 'Instructor_Title_34',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_35',
  },
  {
    id: 3,
    image: images.videocall_three_img,
    icon: 'dot-fill',
    colors: Colors.red_color_set,
    text: 'Instructor_Title_36',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_37',
  },
  {
    id: 4,
    image: images.videocall_four_img,
    icon: 'dot-fill',
    text: 'Instructor_Title_34',
    colors: Colors.green_dot_color,
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_38',
  },
  {
    id: 5,
    image: images.videocall_six_img,
    icon: 'dot-fill',
    colors: Colors.green_dot_color,
    text: 'Instructor_Title_39',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_40',
  },
  {
    id: 6,
    image: images.videocall_saven_img,
    icon: 'dot-fill',
    colors: Colors.red_color_set,
    text: 'Instructor_Title_41',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_40',
  },
  {
    id: 7,
    image: images.videocall_aeight_img,
    icon: 'dot-fill',
    colors: Colors.green_dot_color,
    text: 'Instructor_Title_42',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_43',
  },
  {
    id: 8,
    image: images.videocall_aeight_img_two,
    icon: 'dot-fill',
    text: 'Instructor_Title_44',
    colors: Colors.red_color_set,
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    jobtextset: 'Instructor_Title_45',
  },
];
export const InstructorDetailData = [
  {
    id: 1,
    image: images.My_Courses_Image_1,
    text: 'Instructor_Title_22',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    usertext: 'Instructor_Title_23',
    usericon: 'user',
    clockicon: 'clockcircleo',
    timetextset: 'Instructor_Title_24',
    buttonset: 'Instructor_Title_25',
    buttonsettwo: 'Instructor_Title_26',
  },
  {
    id: 2,
    image: images.My_Courses_Image_2,
    text: 'Instructor_Title_27',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    usertext: 'Instructor_Title_28',
    usericon: 'user',
    clockicon: 'clockcircleo',
    timetextset: 'Instructor_Title_29',
    buttonset: 'Instructor_Title_25',
    buttonsettwo: 'Instructor_Title_26',
  },
  {
    id: 3,
    image: images.My_Courses_Image_3,
    text: 'Instructor_Title_30',
    rating: <Rating tintColor={Colors.white_text_color} imageSize={20} />,
    usertext: 'Instructor_Title_18',
    usericon: 'user',
    clockicon: 'clockcircleo',
    timetextset: 'Instructor_Title_31',
    buttonset: 'Instructor_Title_25',
    buttonsettwo: 'Instructor_Title_26',
  },
];
export const PurchasedHistoryData = [
  {
    id: 1,
    image: images.My_Courses_Image_2,
    text: 'Purchased_History_view_1',
    usertext: 'Purchased_History_view_2',
    timetextset: 'Purchased_History_view_3',
    totalprice: 'Purchased_History_view_4',
    dolardprice: '$ 80.00',
    paymenttypetext: 'Purchased_History_view_5',
    googlepay: 'Purchased_History_view_6',
    buttonset: 'Purchased_History_view_7',
  },
  {
    id: 2,
    image: images.My_Courses_Image_3,
    text: 'Purchased_History_view_8',
    usertext: 'Purchased_History_view_9',
    timetextset: 'Purchased_History_view_3',
    totalprice: 'Purchased_History_view_4',
    dolardprice: '$ 120.00',
    paymenttypetext: 'Purchased_History_view_5',
    googlepay: 'Purchased_History_view_10',
    buttonset: 'Purchased_History_view_7',
  },
  {
    id: 3,
    image: images.My_Courses_Image_4,
    text: 'Purchased_History_view_11',
    usertext: 'Purchased_History_view_12',
    timetextset: 'Purchased_History_view_3',
    totalprice: 'Purchased_History_view_4',
    dolardprice: '$ 60.00',
    paymenttypetext: 'Purchased_History_view_5',
    googlepay: 'Purchased_History_view_13',
    buttonset: 'Purchased_History_view_7',
  },
  {
    id: 4,
    image: images.My_Courses_Image_5,
    text: 'Purchased_History_view_14',
    usertext: 'Purchased_History_view_15',
    timetextset: 'Purchased_History_view_3',
    totalprice: 'Purchased_History_view_4',
    dolardprice: '$ 125.00',
    paymenttypetext: 'Purchased_History_view_5',
    googlepay: 'Purchased_History_view_6',
    buttonset: 'Purchased_History_view_7',
  },
  {
    id: 5,
    image: images.My_Courses_Image_1,
    text: 'Purchased_History_view_16',
    usertext: 'Purchased_History_view_17',
    timetextset: 'Purchased_History_view_3',
    totalprice: 'Purchased_History_view_4',
    dolardprice: '$ 138.00',
    paymenttypetext: 'Purchased_History_view_5',
    googlepay: 'Purchased_History_view_10',
    buttonset: 'Purchased_History_view_7',
  },
];
export const DescriptionSliderData = [
  {
    roundimagtitle: 'photography_Title_1',
    imge: images.Description_image_1,
  },
  {
    roundimagtitle: 'photography_Title_2',
    imge: images.Description_image_2,
  },
  {
    roundimagtitle: 'photography_Title_3',
    imge: images.Description_image_3,
  },
  {
    roundimagtitle: 'photography_Title_4',
    imge: images.Description_image_4,
  },
  {
    roundimagtitle: 'photography_Title_5',
    imge: images.Description_image_5,
  },
  {
    roundimagtitle: 'photography_Title_6',
    imge: images.My_Courses_Image_1,
  },
];
export const LessonsTabData = [
  {
    imge: images.My_Courses_Image_1,
    roundimagtitle: 'photography_Title_7',
    roundimagtitletwo: 'photography_Title_8',
    iconname: 'unlock',
    Unlockedtext: 'photography_Title_10',
  },
  {
    imge: images.My_Courses_Image_2,
    roundimagtitle: 'PopularCoursesData_Title_12',
    roundimagtitletwo: 'photography_Title_11',
    iconname: 'lock',
    Unlockedtext: 'photography_Title_9',
  },
  {
    imge: images.My_Courses_Image_3,
    roundimagtitle: 'Purchased_History_view_11',
    roundimagtitletwo: 'photography_Title_11.',
    iconname: 'lock',
    Unlockedtext: 'photography_Title_9',
  },
  {
    imge: images.My_Courses_Image_4,
    roundimagtitle: 'CarouselItemsFirst_Title_6',
    roundimagtitletwo: 'photography_Title_12',
    iconname: 'lock',
    Unlockedtext: 'photography_Title_9',
  },
  {
    imge: images.My_Courses_Image_5,
    roundimagtitle: 'photography_Title_13',
    roundimagtitletwo: 'photography_Title_14',
    iconname: 'lock',
    Unlockedtext: 'photography_Title_9',
  },
];
export const ReviewsTabData = [
  {
    imge: images.My_Courses_Image_1,
    datetext: 'photography_Title_15',
    username: 'photography_Title_16',
    rating: <Rating tintColor={Colors.lavender_blush_colors} imageSize={20} />,
    paregraphtext: 'photography_Title_17',
  },
  {
    imge: images.Reviews_Image_2,
    datetext: 'photography_Title_18',
    username: 'photography_Title_19',
    rating: <Rating tintColor={Colors.lavender_blush_colors} imageSize={20} />,
    paregraphtext: 'photography_Title_20',
  },
  {
    imge: images.Reviews_Image_3,
    datetext: 'photography_Title_21',
    username: 'photography_Title_22',
    rating: <Rating tintColor={Colors.lavender_blush_colors} imageSize={20} />,
    paregraphtext: 'photography_Title_23',
  },
  {
    imge: images.Reviews_Image_4,
    datetext: 'photography_Title_24',
    username: 'photography_Title_25',
    rating: <Rating tintColor={Colors.lavender_blush_colors} imageSize={20} />,
    paregraphtext: 'photography_Title_26',
  },
];
export const ChexckoutData = [
  {
    image: images.My_Courses_Image_1,
    mintitle: 'photography_Title_27',
    mintitletwo: 'photography_Title_28',
    buttontext: 'photography_Title_29',
    ratingview: (
      <Rating tintColor={Colors.lavender_blush_colors} imageSize={15} />
    ),
    digitrating: 'photography_Title_30',
    hoursetext: 'photography_Title_31',
    removetext: 'photography_Title_32',
    movetowishilisttwxt: 'photography_Title_33',
  },
  {
    image: images.My_Courses_Image_2,
    mintitle: 'photography_Title_34',
    mintitletwo: 'photography_Title_28',
    buttontext: 'photography_Title_29',
    ratingview: (
      <Rating tintColor={Colors.lavender_blush_colors} imageSize={15} />
    ),
    digitrating: 'photography_Title_30',
    hoursetext: 'photography_Title_35',
    removetext: 'photography_Title_32',
    movetowishilisttwxt: 'photography_Title_33',
  },
];
export const CoursesDataview = [
  {
    gittext: 'CarouselItemsFirst_Title_2',
    images: images.My_Courses_Image_1,
    reviewtext: 'photography_Title_37',
    digittext: '$89',
  },
  {
    gittext: 'photography_Title_38',
    images: images.My_Courses_Image_2,
    reviewtext: 'photography_Title_40',
    digittext: '$116',
  },
  {
    gittext: 'photography_Title_39',
    images: images.My_Courses_Image_3,
    reviewtext: 'photography_Title_37',
    digittext: '$76',
  },
  {
    gittext: 'photography_Title_13',
    images: images.My_Courses_Image_4,
    reviewtext: 'photography_Title_37',
    digittext: '$140',
  },
  {
    gittext: 'PopularCoursesData_Title_12',
    images: images.My_Courses_Image_5,
    reviewtext: 'photography_Title_37',
    digittext: '$89',
  },
  {
    gittext: 'Purchased_History_view_11',
    images: images.My_Courses_Image_6,
    reviewtext: 'photography_Title_37',
    digittext: '$75',
  },
  {
    gittext: 'CarouselItemsFirst_Title_8',
    images: images.My_Courses_Image_3,
    reviewtext: 'photography_Title_37',
    digittext: '$40',
  },
  {
    gittext: 'Purchased_History_view_16',
    images: images.Description_image_1,
    reviewtext: 'photography_Title_37',
    digittext: '$108',
  },
];
export const questions = [
  {
    questions: [
      {
        questionText:
          'From the given options which would you consider as environmental analysis that you would perform as a program manager?',
        index: '1',
        answers: [
          {
            label:
              'Monte-Carlo Simulations, Comparative advantage Analysis, SWOT analysis',
            value: 0,
          },
          {
            label: 'SWOT Analysis, assumptions analysis, Ishikawa analysis',
            value: 0,
          },
          {
            label: 'Feasibility study, SWOT analysis, Monte-Carlo simulations',
            value: 0,
          },
          {
            label:
              'Assumptions analysis, SWOT analysis, historical information',
            value: 1,
          },
        ],
      },

      {
        questionText:
          'From the given options which would you consider as environmental analysis that you would perform as a program manager?',
        index: '2',
        answers: [
          {
            label:
              'Monte-Carlo Simulations, Comparative advantage Analysis, SWOT analysis',
            value: 0,
          },
          {
            label: 'SWOT Analysis, assumptions analysis, Ishikawa analysis',
            value: 0,
          },
          {
            label: 'Feasibility study, SWOT analysis, Monte-Carlo simulations',
            value: 1,
          },
          {
            label:
              'Assumptions analysis, SWOT analysis, historical information',
            value: 0,
          },
        ],
      },
      {
        questionText: 'Portfolios influence programs by its needs. Such as,',
        index: '3',
        answers: [
          {
            label: 'High level risks and issues',
            value: 0,
          },
          {
            label: 'Schedule Deadlines',
            value: 1,
          },
          {
            label: 'Policies and Standards',
            value: 0,
          },
          {
            label: 'Requirement from Portfolio Review Board',
            value: 0,
          },
        ],
      },
      {
        questionText: 'Portfolios influence programs by its needs. Such as,',
        index: '4',
        answers: [
          {
            label: 'High level risks and issues',
            value: 1,
          },
          {
            label: 'Schedule Deadlines',
            value: 0,
          },
          {
            label: 'Policies and Standards',
            value: 0,
          },
          {
            label: 'Requirement from Portfolio Review Board',
            value: 0,
          },
        ],
      },
      {
        questionText:
          'From the given options which would you consider as enterprise environmental factors for your program?',
        index: '5',
        answers: [
          {
            label: 'Legislation, Sponsor, Regulation',
            value: 1,
          },
          {
            label: 'Board members, Funds and Economy',
            value: 0,
          },
          {
            label: 'Market, Regulation and Industry',
            value: 0,
          },
          {
            label: "Interest Rate, Exchange rate and organisation's processes",
            value: 0,
          },
        ],
      },
      {
        questionText:
          'Program charter was issued and you were appointed by the program sponsor to initiate the program. ',
        index: '6',
        answers: [
          {
            label:
              "Because, you didn't analyse the required resources and the skillsets",
            value: 1,
          },
          {
            label:
              "Because, you didn't clarify benefits fulfilment and integration needs",
            value: 0,
          },
          {
            label: "Because, you didn't analyse program's budget",
            value: 0,
          },
          {
            label: "Because, you didn't quantify identified benefits",
            value: 0,
          },
        ],
      },
      {
        questionText:
          'You are asked to be a program manager to upgrade IT infrastructure of your company.',
        index: '7',
        answers: [
          {
            label: 'is expected to consume huge costs',
            value: 1,
          },
          {
            label:
              'is expected to consume huge amount of organizational resources',
            value: 0,
          },
          {
            label: 'is considered catalyst for change',
            value: 0,
          },
          {
            label: 'is better implemented in phases',
            value: 0,
          },
        ],
      },
      {
        questionText:
          'Once your program is approved, what should the board do next?',
        index: '8',
        answers: [
          {
            label: 'Plan first governance meeting to set ground rules',
            value: 1,
          },
          {
            label: 'Review initial assessment results',
            value: 0,
          },
          {
            label: 'Get resources for planning organized',
            value: 0,
          },
          {
            label: 'Review Program Roadmap',
            value: 0,
          },
        ],
      },
      {
        questionText:
          'From the given options, which do you think can serve to be the fundamental objective for any program?',
        index: '9',
        answers: [
          {
            label:
              'Align with strategic objectives in generating program benefits',
            value: 1,
          },
          {
            label: 'Align program benefits with customer expectations',
            value: 0,
          },
          {
            label:
              'To maximise benefits in presence of component interdependencies',
            value: 0,
          },
          {
            label:
              "To generate strategic benefits by stakeholders coordinating program's interdependent components",
            value: 0,
          },
        ],
      },
      {
        questionText:
          'Your program is selected by the steering committee. What should you do first from the list?',
        index: '10',
        answers: [
          {
            label: 'Prepare mission statement',
            value: 1,
          },
          {
            label: 'Prepare business case',
            value: 0,
          },
          {
            label: 'Prepare high level program roadmap',
            value: 0,
          },
          {
            label: 'Identify program requirements',
            value: 0,
          },
        ],
      },
      {
        questionText: 'Why should projects be managed as a program?',
        index: '11',
        answers: [
          {
            label: 'Projects need more funding compared to the program',
            value: 1,
          },
          {
            label: 'Projects need much more resources compared to the program',
            value: 0,
          },
          {
            label: 'generated benefits will be better with program',
            value: 0,
          },
          {
            label: 'If projects are related, they must be combined',
            value: 0,
          },
        ],
      },
      {
        questionText: 'Programs are long and complex by nature hence,',
        index: '12',
        answers: [
          {
            label:
              'Strategic opportunities for change should be sought for and exploited',
            value: 1,
          },
          {
            label:
              'Program Plan should be prepared with Mission, Vision & Goals to achieve clear direction',
            value: 0,
          },
          {
            label:
              'Enterprise environmental factors should be closely monitored',
            value: 0,
          },
          {
            label:
              "A master schedule should be prepared along with Benefits Realization Plan and kept up to date to ensure program's success",
            value: 0,
          },
        ],
      },
      {
        questionText: 'Portfolios influence programs by its needs. Such as,',
        index: '13',
        answers: [
          {
            label: 'High level risks and issues',
            value: 1,
          },
          {
            label: 'Schedule Deadlines',
            value: 0,
          },
          {
            label: 'Policies and Standards',
            value: 0,
          },
          {
            label: 'Requirement from Portfolio Review Board',
            value: 0,
          },
        ],
      },
      {
        questionText:
          "To support the decision makers to come to a decision about the program's existence,",
        index: '14',
        answers: [
          {
            label: 'key stakeholders should be consulted',
            value: 1,
          },
          {
            label: 'feasibility study should be conducted',
            value: 0,
          },
          {
            label: 'program initial program charter should be submitted',
            value: 0,
          },
          {
            label: 'program charter should be submitted',
            value: 0,
          },
        ],
      },
      {
        questionText:
          "Why program should support organization's strategic goals?",
        index: '15',
        answers: [
          {
            label:
              'Because, executive steering committee initiated the program',
            value: 1,
          },
          {
            label:
              'Because, program sponsor is part of the executive steering committee',
            value: 0,
          },
          {
            label:
              'Because, strategic goals generate the revenue to run the program',
            value: 0,
          },
          {
            label:
              'Because, program benefits in some or some other way affect entire organization',
            value: 0,
          },
        ],
      },
      {
        questionText:
          'Which one is most important for board to decide whether program can be approved or not?',
        index: '16',
        answers: [
          {
            label: 'Resources',
            value: 1,
          },
          {
            label: 'Risks',
            value: 0,
          },
          {
            label: 'Constraints',
            value: 0,
          },
          {
            label: 'Benefits',
            value: 0,
          },
        ],
      },
      {
        questionText: 'SWOT analysis provides information for',
        index: '17',
        answers: [
          {
            label: 'developing program roadmap',
            value: 1,
          },
          {
            label: 'developing risk register',
            value: 0,
          },
          {
            label: 'developing issues register',
            value: 0,
          },
          {
            label: 'developing program plan',
            value: 0,
          },
        ],
      },
      {
        questionText:
          'You would conduct comparative advantage analysis so that,',
        index: '18',
        answers: [
          {
            label: 'Alternative resources of the program can be compared',
            value: 1,
          },
          {
            label: "You can perform what-if analysis on program's objectives",
            value: 0,
          },
          {
            label: "Program's funding sources can be compared",
            value: 0,
          },
          {
            label:
              "Program's Positive Risks and their advantages can be compared",
            value: 0,
          },
        ],
      },
      {
        questionText:
          'Once your program is approved, what should the board do next?',
        index: '19',
        answers: [
          {
            label: 'Plan first governance meeting to set ground rules',
            value: 1,
          },
          {
            label: 'Review initial assessment results',
            value: 0,
          },
          {
            label: 'Get resources for planning organized',
            value: 0,
          },
          {
            label: 'Review Program Roadmap',
            value: 0,
          },
        ],
      },
      {
        questionText:
          'You are part of steering board and represent yourself as a head of operations. ',
        index: '20',
        answers: [
          {
            label: 'Impact to ongoing operations activities',
            value: 1,
          },
          {
            label: 'Interactions between program and operational activities',
            value: 0,
          },
          {
            label: "Program's financial needs",
            value: 0,
          },
          {
            label: 'Operational requirements from program',
            value: 0,
          },
        ],
      },
    ],
  },
];
