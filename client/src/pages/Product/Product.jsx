import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import {Routes, Route, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const navigate = useNavigate();
   const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  var date1 = new Date();
  var date2 = new Date("06/30/2023");
    
     // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const THREE_DAYS_IN_MS = Difference_In_Days * 24 * 60 * 60 * 1000;
  

  const NOW_IN_MS = new Date().getTime();

      console.log("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);
      
  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;


  console.log(data);

 const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="row">
              <button className="backButton" onClick={navigateHome}> <ArrowBackIosIcon /> </button>
          </div>

          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img1?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img1")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            {/* <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div> */}
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    price: data?.attributes?.price,
                    img: data?.attributes?.img1?.data?.attributes?.url,
                    image: data?.attributes?.img1?.data?.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <CalendarMonthOutlinedIcon /> ADD TO CALENDAR
              </div>
            </div>

            <div>
              <h1>LIVE ON</h1>
              <h3>30th JUNE, 2023 at 0000 HKT</h3>
            </div>

            <div>
              <h1>FIRST COME FIRST SERVE</h1>
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>


            <hr />

             <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="About" {...a11yProps(0)} />
                  <Tab label="Drops" {...a11yProps(1)} />
                  <Tab label="What's Include?" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem ligula, ultricies in metus at, hendrerit tincidunt justo. Nulla hendrerit quis eros et vulputate. Vestibulum facilisis sagittis quam vel commodo. Etiam ultrices pulvinar accumsan. Donec quis risus at neque ornare suscipit. Donec porta, felis et bibendum feugiat, leo urna blandit eros, et consequat lorem nunc sed risus. Donec vitae facilisis turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultrices justo eros, non sollicitudin odio sagittis sed. Donec non cursus lacus. Suspendisse in nisi eleifend, tristique elit sed, feugiat justo. Integer nec nulla sodales, dictum augue quis, suscipit nulla. Donec sed elit gravida, rutrum ipsum eget, mollis ex. Ut vitae felis viverra, eleifend diam in, consequat orci. Mauris sit amet aliquet eros.
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                        Nulla congue nisl ligula, sed dictum risus rhoncus in. Nam tellus odio, molestie nec nisl non, pharetra ornare mi. Mauris vitae dui tempor, mattis ligula ac, blandit dui. Etiam mollis augue eros, et faucibus nunc porta non. Pellentesque at blandit leo. Nullam a odio elementum, maximus mauris efficitur, iaculis felis. Aliquam erat volutpat. Maecenas laoreet sapien turpis, et rutrum enim auctor maximus. Donec tellus ex, iaculis eget volutpat et, auctor non augue. Ut accumsan feugiat dolor, eget accumsan felis. Ut in pretium libero.
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                        Fusce at luctus augue, pharetra tempus orci. Donec placerat urna et ligula semper finibus. Nunc bibendum lobortis urna vitae aliquam. Pellentesque ut mauris ut nibh imperdiet condimentum. Suspendisse consequat justo ac volutpat cursus. Sed tortor purus, dictum id aliquet hendrerit, tristique vel dui. Morbi sed urna eu arcu dignissim vehicula eu sit amet mauris. Ut imperdiet urna ac dolor malesuada tempor. Duis sit amet risus massa. Nunc ullamcorper mi id orci lobortis, in pretium nibh ornare. Donec mauris mi, congue non felis quis, vulputate euismod odio. Aliquam erat volutpat. Nam ac magna tortor. Cras vehicula ullamcorper dictum. Aliquam quis molestie metus. Praesent neque nisi, fringilla eget risus ut, suscipit vehicula dui.
                </TabPanel>
              </SwipeableViews>
            </Box>


          </div>
        </>
      )}
    </div>
  );
};

export default Product;
