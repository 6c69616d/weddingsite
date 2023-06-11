import { makeStyles } from "@mui/styles"
import Location from "../../pages/location";

const useStyles = makeStyles({
  sectionId: {
    minHeight: '100vh'
  }
});

const Section = ({ sectionId, children }) => {
  const classes = useStyles();

  // switch(sectionId) {
  //   case 'location':
  //       return <div><Location/></div> 
    
  // }

  return <div  className={classes.sectionId} id={sectionId}>
  {children}
  </div>
}

export default Section;
