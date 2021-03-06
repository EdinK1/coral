import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: '0 auto',
    textAlign: 'center',
    '@media (min-width: 480px)': {
      width: '80%',
    },
  },
  logo: {
    '@media (min-width: 480px)': {
      display: 'flex',
      alignItems: 'center',
      width: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    listStyleType: 'none',
    padding: '1rem',
  },
  mainContent: {
    width: '100%',
    backgroundImage: 'url("/coral_landing.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '250px',
    backgroundPosition: 'bottom right',
    display: 'flex',
    height: '750px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '1rem',
    '@media (min-width: 480px)': {
      width: '80%',
      margin: '0 auto',
      justifyContent: 'center',
    },
  },
  heading: {
    marginTop: '10rem',
    fontWeight: '400',
    '@media (min-width: 480px)': {
      marginTop: '0',
      fontSize: '2.15rem',
    },
  },
  paragraph: {
    '@media (min-width: 480px)': {
      fontSize: '1.5rem',
      fontWeight: '100',
    },
  },
  landingImgs: {
    height: 'auto',
    width: '100%',
    margin: '2rem 0',
    textAlign: 'center',
    '@media (min-width: 480px)': {
      height: '250px',
      width: 'auto',
    },
  },
  features: {
    '@media (min-width: 480px)': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
  },
  feature: {
    '@media (min-width: 480px)': {
      width: '33%',
      margin: '0 auto',
      padding: '1.5rem 0',
    },
  },
  devImgs: {
    borderRadius: '50%',
    '@media (max-width: 480px)': {
      width: '80%',
    },
  },
  devLinks: {
    fontSize: '2.25rem',
    padding: '0 1rem',
  },
  footer: {
    textAlign: 'center',
  },
})

export default styles
