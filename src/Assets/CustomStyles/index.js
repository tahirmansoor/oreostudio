import { NoEncryption } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import Bg from '../../Assets/Images/bg1.jpg';
import AboutBg from '../../Assets/Images/bg2.png';
import AppBackground from '../../Assets/Images/bg3.png';
import FooterBg from '../../Assets/Images/bg-footer.png';
import LoginBg from '../../Assets/Images/LoginBg.png';


const useStyles = makeStyles({

  Logo:{
        width : '131px' ,
      }
      ,

      Phone:{
        fontWeight: 700,
        fontSize: 14,   
      }
      ,

      MainColom:{
        paddingTop: 35
      }
      ,

      LogoCenter:{
        margin: '50px auto 55px auto',
        float: 'none',
        display:'table',
        width:'100px',
    },

    HeaderSec :{
      position: 'absolute',
      top:'0',
      left:'0',
      right:'0',
    },

    SliderSec:{
      backgroundImage: `url(${Bg})`,
      minHeight: '670px',
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor:'#000',
      backgroundPosition:'center',
      paddingTop: '5rem',
    },
    
    border:{
      position: 'relative',
      width: '4em',
      height: '4px',
      borderRadius: '3px',
      marginTop: '8px',
      transition: 'all .4s ease-in-out',
    },

    AboutSec:{
      backgroundImage: `url(${AboutBg})`,
      padding:'50px 20px',
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor:'#000',
      backgroundPosition:'center',
      position:'relative',
    },

    Middle:{
      display:'flex',
      alignItems:'center',      
      margin:' 0 auto',
      justifyContent:'space-around',
      position:'relative',
    },

    FullImg:{
      width:'100%',
    },

    Title:{
    color: '#000',
    fontSize: '35px !important',
    fontWeight: 'bold !important',
    width:'60%',
    margin:'10px auto 60px !important',
    lineHeight: '50px',
    textShadow: '0px 6px 0px rgb(0 0 0 / 10%)',
    marginBottom: '0px',
    lineBreak:'initial',
    textAlign:'center',
    },

    SmallText:{
      fontSize: '15px !important',
      color:'#407bff !important',
      fontWeight:'500 !important',
    },

    para:{
      fontSize: '14px !important',
      color:'#000 !important',
      fontWeight:'500 !important',
      lineHeight:'25px',
      textAlign:'center',
      padding:'0 30px',
      
    },
    
    Link:{
      fontSize: '15px !important',
      color:'#0052d4 !important',
      fontWeight:'600 !important',
      position:'relative',
      '&::before':{
      position:'absolute',
      content:'',
      color: '#FFF',
      width: '28px',
      height: '28px',
      zIndex: '0',     
      Left:0,
      borderRadius: '50%',
      backgroundColor: '#9cecfb',
    }
   },

   Circle:{
    top: '-2%',
    left: '-9%',
    width: '170px',
    height: '170px',
    position: 'absolute',
    background: 'linear-gradient(#65c7f7 0%, #0052d4 100%)',
    borderRadius: '50%',
   },

   Heading:{
    color: '#000',
    fontSize: '45px !important',
    fontWeight: 'bold !important',
    lineHeight: '50px',
    textShadow: '0px 6px 0px rgb(0 0 0 / 10%)',
    marginBottom: '0px',
    lineBreak:'initial',
    width:'50%',
    margin:'0 auto',
    float:'none',
    display:'table',
    textAlign:'center',
    },

   ServiceSec:{
    paddingTop:'50px',
   },

   ServImg:{
    margin:' 0 auto',
    float:'none',
    display:'table',
   }
   ,

   ServName:{
    color: '#000',
    fontSize: '25px !important',
    fontWeight: '800 !important',
    lineHeight: '50px',
    textShadow: '0px 6px 0px rgb(0 0 0 / 10%)',
    marginBottom: '0px',
    lineBreak:'initial',
    textAlign:'center',
  },

  More:{
    fontSize: '15px !important',
    color:'#407bff !important',
    fontWeight:'600 !important',
    textAlign:'center',
    display:'block',
  },

  AppsContent:{
    padding:'60px 20px 20px 20px', 
    height:'453px',
    backgroundSize:'100% 100%',
    '& p':{
      color: '#fff',
      fontSize:'13px',
      lineHeight:'22px',
    },

    '& h2' :{
      color: '#FFF',
      fontSize:'30px',
      fontWeight:'bold',
      textShadow:'0px 6px 0px rgb(0 0 0 / 10%)',
    },
    '& h6' :{
      color: '#FFF',
      fontWeight:'300',
    },
    '& a':{
      color: '#0052d4',
      position: 'relative',
      fontSize: '15px',
      fontWeight: 'bold',
      marginLeft: '12px',
      textDecoration: 'none',
    }

  },
  
  CentImg:{
    margin:'0 auto',
    float:'none',
    display:'table',
    width:'47%',
  },

  columnreverse: {    
    flexDirection: 'row-reverse',
    color:'#000',
  },

  footertext:{
    padding:'20px',
    width: '100%',
    position: 'relative',
    paddingtop: '200px',
    paddingLeft:'300px',
    minHeight: '570px',
    backgroundSize: '100% auto',
    backgroundImage: `url(${FooterBg})`,
    backgroundRepeat: 'no-repeat', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },

  List:{
    padding:'0 !important' ,
    '& li':{
      listStyle:'none',
     },

     '& a':{
      color:'#fff',
      fontSize:'13px',
      fontWeight:'300',
      textDecoration:'none',
     }
  },

  TitleFooter:{
    color:'#FFF',
    fontSize:'20px',
    fontWeight:'600',    
  },

  InputType:{
    color: '#e6e6e6',
    width: '100%',
    border: '1px solid #707070',
    Height: '45px',
    fontSize: '14px',
    background: 'transparent',
    boxSizing: 'borderbox',
    fontFamily: 'Poppins !important',
    fontWeight: 'normal',
    paddingLeft: '12px',
},

LoginBg:{
  width: '100%',
  marginTop: '50px',
  minHeight: '1230px',
  paddingTop: '250px',
  backgroundSize: 'cover',
  backgroundImage:`url(${LoginBg})`,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},

InputType:{
    color: '#fff',
    width: '100%',
    border: '1px solid white',
    height: '51.94px',
    background: 'rgba(255, 255, 255, 0.2)',
    boxSizing:'border-box',
    paddingLeft:'20px',
    marginBottom:' 20px',
}
,

LoginTitle:{
    color: '#FFFFFF',
    fontSize: '40px !important',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: '47px',
    marginBottom: '30px !important',
    textTransform: 'upperCase ',
},

SubmitBtn:{
  backgroundImage:'radial-gradient(100% 106.79% at .22% 50%,#958b60 0,#958b60 .01%,#000 100%)',
  border: '1px solid #958b60',
  color: '#fff',
  fontSize: '16px',
  height: '51.95px',
  padding: '12px 24px!important',
  width: '169.91px',
  margin:'0 auto',
  float:'none',
  display:'table',
},

Label:{
  color:'#FFF',
},

SignUpSection:{
  paddingTop:'8rem',
}
,

test:{
  borderbottom:' 1px solid red',
}






});


export default useStyles;