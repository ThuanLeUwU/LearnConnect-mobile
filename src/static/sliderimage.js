import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconS from 'react-native-vector-icons/EvilIcons';
import {HomeStyles} from '../style';

export const carouselItems = [
  {
    title: 'Digital',
    paregraphtitle: 'Python for Data Science Intermediated Level',
    imge: (
      <Image
        style={HomeStyles.imagsetstyle}
        resizeMode="stretch"
        source={require('../image/educationtwo.png')}
      />
    ),
  },
  {
    title: 'App Development',
    paregraphtitle: 'Python programing Masterclass',
    imge: (
      <Image
        style={HomeStyles.imagsetstyle}
        resizeMode="stretch"
        source={require('../image/educationthree.png')}
      />
    ),
  },
  {
    title: 'Robotics',
    paregraphtitle: 'Data Science With Python',
    imge: (
      <Image
        style={HomeStyles.imagsetstyle}
        resizeMode="stretch"
        source={require('../image/educationbgimage.png')}
      />
    ),
  },
  {
    title: 'Data Science Training',
    paregraphtitle: 'Tableau Certification training',
    imge: (
      <Image
        style={HomeStyles.imagsetstyle}
        resizeMode="stretch"
        source={require('../image/educationfive.png')}
      />
    ),
  },
  {
    title: 'Software Testing',
    paregraphtitle: 'Jenking Beginner Course',
    imge: (
      <Image
        style={HomeStyles.imagsetstyle}
        resizeMode="stretch"
        source={require('../image/educationfour.png')}
      />
    ),
  },
];

export const carouselItemstwo = [
  {
    roundimagtitle: 'Aws Certification',
    imge: (
      <Image
        style={{width: 130, borderRadius: 100, height: 130}}
        resizeMode="cover"
        source={require('../image/slidertwo1.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Digital Marketing',
    imge: (
      <Image
        style={{width: 130, borderRadius: 100, height: 130}}
        resizeMode="cover"
        source={require('../image/educationtwo.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Devops Training',
    imge: (
      <Image
        style={{width: 130, borderRadius: 100, height: 130}}
        resizeMode="cover"
        source={require('../image/bigimagsetsettwo.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Dtabases',
    imge: (
      <Image
        style={{width: 130, borderRadius: 100, height: 130}}
        resizeMode="cover"
        source={require('../image/bigimagset.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Operating Systems',
    imge: (
      <Image
        style={{width: 130, borderRadius: 100, height: 130}}
        resizeMode="cover"
        source={require('../image/slidertwo4.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Developing',
    imge: (
      <Image
        style={{width: 130, borderRadius: 100, height: 130}}
        resizeMode="cover"
        source={require('../image/slidertwo5.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Big Data',
    imge: (
      <Image
        style={{width: 130, borderRadius: 100, height: 130}}
        resizeMode="cover"
        source={require('../image/educationfive.png')}
      />
    ),
  },
];
export const carouselItemsthree = [
  {
    whitebodyimagetext: 'Console Development Basics with Unity',
    blacktitle: 'AWS Monitoring and Logging',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon5: <IconS size={15} name="star" style={HomeStyles.chengecolorstyle} />,
    blacktitledigit2: '$49',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        source={require('../image/sliderthree1.png')}
      />
    ),
  },
  {
    whitebodyimagetext: 'Design Instruments for Communication',
    blacktitle: 'AWS Solution Architest Associatel Level|SAA-C02 2021',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon5: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    blacktitledigit2: '$59',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        source={require('../image/sliderthree2.png')}
      />
    ),
  },
  {
    whitebodyimagetext: 'How to be a DJ? Make Electronic Music',
    blacktitle: 'AWS Certified Developer Associate 2021',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    blacktitledigit2: '$59',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        source={require('../image/sliderthree3.png')}
      />
    ),
  },
  {
    whitebodyimagetext: 'Weight Training Courses with Any Di',
    blacktitle: 'AWS Sysops Administrator Associate',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon5: <IconS size={15} name="star" style={HomeStyles.chengecolorstyle} />,
    blacktitledigit2: '$64',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        source={require('../image/sliderthree4.png')}
      />
    ),
  },
];
export const carouselItemsfour = [
  {
    whitebodyimagetext: 'Design Instruments for Communication',
    blacktitle: 'GIT and GIT Hub Completed Course',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon5: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    blacktitledigit2: '$59',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        resizeMode="cover"
        source={require('../image/sliderfour3.png')}
      />
    ),
  },
  {
    whitebodyimagetext: 'Design Instruments for Communication',
    blacktitle: 'Docker Beginner Courses',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <IconS size={15} name="star" style={HomeStyles.chengecolorstyle} />,

    blacktitledigit2: '$64',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        resizeMode="cover"
        source={require('../image/sliderfour2.png')}
      />
    ),
  },
  {
    whitebodyimagetext: 'How to be a DJ? Make Electronic Music',
    blacktitle: 'Jenking Beginner Course',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon5: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,

    blacktitledigit2: '$49',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        resizeMode="cover"
        source={require('../image/sliderfour1.png')}
      />
    ),
  },
  {
    whitebodyimagetext: 'Selenium WebDriver With Java-Basics to Advanced',
    blacktitle: 'Electronic',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon4: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    blacktitledigit2: '$59',
    imge: (
      <Image
        style={HomeStyles.imagsetHomeStylesetthreeslider}
        resizeMode="cover"
        source={require('../image/sliderfour4.png')}
      />
    ),
  },
];
export const carouselItemsfive = [
  {
    username: 'Haresh',
    userjob: 'Teacher',
    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <IconS size={15} name="star" style={HomeStyles.chengecolorstyle} />,

    userrankingtwo: '(7.4k Reviews)',
    imge: (
      <Image
        style={{width: 120, borderRadius: 100, height: 120}}
        source={require('../image/sliderfive1.png')}
      />
    ),
  },
  {
    username: 'Alpesh',
    userjob: 'Marketing Consultant',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,

    userrankingtwo: '(15.2k Reviews)',
    imge: (
      <Image
        style={{width: 120, borderRadius: 100, height: 120}}
        source={require('../image/instrucer.png')}
      />
    ),
  },
  {
    username: 'Vijay',
    userjob: 'C++ Expert',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    userrankingtwo: '(131k Reviews)',
    imge: (
      <Image
        style={{width: 120, borderRadius: 100, height: 120}}
        source={require('../image/instrucer2.png')}
      />
    ),
  },
  {
    username: 'Prinkesh',
    userjob: 'Fitness Instructor',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    userrankingtwo: '(149k Reviews)',
    imge: (
      <Image
        style={{width: 120, borderRadius: 100, height: 120}}
        source={require('../image/instrucer3.png')}
      />
    ),
  },
  {
    username: 'Hasmukh',
    userjob: 'Flutter Expert',

    icon: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon2: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    icon3: <Icon size={15} name="star" style={HomeStyles.stariconstyle} />,
    userrankingtwo: '(184k Reviews)',
    imge: (
      <Image
        style={{width: 120, borderRadius: 100, height: 120}}
        source={require('../image/sliderfive5.png')}
      />
    ),
  },
];

export const carouselItemoverviewtabslider = [
  {
    roundimagtitle: 'Full Language',
    imge: (
      <Image
        style={{width: 180, borderRadius: 20, height: 180}}
        resizeMode="stretch"
        source={require('../image/bearytifil.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Practicals',
    imge: (
      <Image
        style={{width: 180, borderRadius: 20, height: 180}}
        resizeMode="stretch"
        source={require('../image/bearytifil.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Full Language',
    imge: (
      <Image
        style={{width: 180, borderRadius: 20, height: 180}}
        resizeMode="stretch"
        source={require('../image/bearytifil.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Full Language',
    imge: (
      <Image
        style={{width: 180, borderRadius: 20, height: 180}}
        resizeMode="stretch"
        source={require('../image/bearytifil.png')}
      />
    ),
  },
];

export const overviewsliderimg = [
  {
    roundimagtitle: 'Art & photography',
    imge: (
      <Image
        style={{width: 150, borderRadius: 7, height: 150}}
        source={require('../image/overviewtabslider1.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Health & Fitness',
    imge: (
      <Image
        style={{width: 150, borderRadius: 7, height: 150}}
        source={require('../image/overviewtabslider2.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Business & Marketing',
    imge: (
      <Image
        style={{width: 150, borderRadius: 7, height: 150}}
        source={require('../image/overviewtabslider3.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Computer Science',
    imge: (
      <Image
        style={{width: 150, borderRadius: 7, height: 150}}
        source={require('../image/overviewtabslider4.png')}
      />
    ),
  },
  {
    roundimagtitle: '3D Priting Concept',
    imge: (
      <Image
        style={{width: 150, borderRadius: 7, height: 150}}
        source={require('../image/overviewtabslider5.png')}
      />
    ),
  },
  {
    roundimagtitle: 'Electronic',
    imge: (
      <Image
        style={{width: 150, borderRadius: 7, height: 150}}
        source={require('../image/overviewtabslider6.png')}
      />
    ),
  },
];
