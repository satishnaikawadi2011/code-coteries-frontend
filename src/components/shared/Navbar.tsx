import { AppBar, Avatar, Fade, Grid, Hidden, InputBase, Typography } from '@mui/material';
import React from 'react';
import LoadingIcon from 'src/icons/LoadingIcon';
import { useNavbarStyles } from 'src/styles/navbar';
import Logo from './Logo';

interface NavbarProps {
	minimal?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ minimal = false }) => {
	const classes = useNavbarStyles();
	return (
		<AppBar className={classes.appBar}>
			<section className={classes.section}>
				<Logo size={30} />
				{/* {!minimal && <Search />} */}
				{/* {!minimal && <Links />} */}
			</section>
		</AppBar>
	);
};

const Search = ({}) => {
	const classes = useNavbarStyles();
	const [
		loading,
		setLoading
	] = React.useState(false);
	const [
		results,
		setResults
	] = React.useState([]);
	const [
		query,
		setQuery
	] = React.useState('');
	//   const [searchUsers, { data }] = useLazyQuery(SEARCH_USERS);

	const hasResults = Boolean(query) && results.length > 0;

	//   React.useEffect(() => {
	//     if (!query.trim()) return;
	//     setLoading(true);
	//     const variables = { query: `%${query}%` };
	//     searchUsers({ variables });
	//     if (data) {
	//       setResults(data.users);
	//       setLoading(false);
	//     }
	//   }, [query, data, searchUsers]);

	function handleClearInput() {
		setQuery('');
	}

	return (
		<Hidden xsDown>
			{/* <WhiteTooltip
        arrow
        interactive
        TransitionComponent={Fade}
        open={hasResults}
        title={
          hasResults && (
            <Grid className={classes.resultContainer} container>
              {results.map((result) => (
                <Grid
                  key={result.id}
                  item
                  className={classes.resultLink}
                  onClick={() => {
                    history.push(`/${result.usrname}`);
                    handleClearInput();
                  }}
                >
                  <div className={classes.resultWrapper}>
                    <div className={classes.avatarWrapper}>
                      <Avatar src={result.profile_image} alt="user avatar" />
                    </div>
                    <div className={classes.nameWrapper}>
                      <Typography variant="body1">{result.username}</Typography>
                      <Typography variant="body2" clolor="textSecondary">
                        {result.name}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )
        }
      >
        <InputBase
          className={classes.input}
          onChange={(event:any) => setQuery(event.target.value)}
          startAdornment={<span className={classes.searchIcon} />}
          endAdornment={
            loading ? (
              <LoadingIcon />
            ) : (
              <span onClick={handleClearInput} className={classes.clearIcon} />
            )
          }
          placeholder="Search"
          value={query}
        />
      </WhiteTooltip> */}
		</Hidden>
	);
};

const Links = ({}) => {
	return <h1>Links</h1>;
};

export default Navbar;
