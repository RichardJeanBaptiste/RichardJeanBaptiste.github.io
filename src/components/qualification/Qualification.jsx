import React, {useState} from 'react';
import "./qualification.css";
import { Box, ImageList, ImageListItem } from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import TempImg from '../../assets/under_construction.png';

const useStyles= (theme) => ({
    imagelist: {
        width: 700,
        height: 200,

        [theme.breakpoints.down('md')]: {
            width: 500,
            height: 200,
        },

        [theme.breakpoints.down('xs')]: {
            width: 200,
            height: 200,
        },

        '&:hover': {
            cursor: 'pointer',  
        }
    }
  })

const Qualification = () => {

    // const [ toggleState, setToggleState ] = useState(0);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // }

    const theme = useTheme();
    const styles = useStyles(theme);
  return (
    <section className="qualification section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">My personal projects</span>

        <div className="qualification_container container" >
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <ImageList sx={styles.imagelist} cols={3} gap={16} rowHeight={164}>
                    <ImageListItem>
                        <img
                            src={TempImg}
                            alt="alt image"
                            loading="lazy"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src={TempImg}
                            alt="alt image"
                            loading="lazy"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src={TempImg}
                            alt="alt image"
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
            </Box>
        </div>
        

    </section>
  )
}

export default Qualification