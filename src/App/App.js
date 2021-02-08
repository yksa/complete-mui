import { makeStyles, CssBaseline } from "@material-ui/core";
import './App.css';
import SideMenu from "../components/SideMenu";
import Header from '../components/Header';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: 320,
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
