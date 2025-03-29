import './App.css'
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit'
import { Navbar } from './Components/navbar/Navbar';
import { Home } from './Components/home/Home';
import { About } from './Components/about/About';
import { Services } from './Components/services/Services';
import { Appointment } from './Components/appointment/Appointment';
import { Blogs } from './Components/blog/Blogs';
// import { Footer } from './Components/footer/Footer';

function App() {

  const account = useCurrentAccount();

  return (
    <div>
        <Navbar />
      <nav>
        <ConnectButton/>
        <main>
                <div id="home">
                    <Home/>
                </div>

                <div id="about">
                    <About/>
                </div>

                <div id="service">
                    <Services/>
                </div>

                <div id="appointment">
                    <Appointment/>
                </div>

                <div id="blog">
                    <Blogs/>
                </div>
            </main>
            {/*<Footer />*/}

            MedVualt
      </nav>
      {/* <section>{account ? "No wallet connecter" : `Your address is ${account.address}`}</section> */}
    </div>
  );
};


// export function OwnedObjects() {
// 	const account = useCurrentAccount() || {address: ''};
// 	const { data } = useSuiClientQuery('getOwnedObjects', { owner: account.address });

// 	return (
// 		<ul>
// 			{data.data.map((object) => (
// 				<li key={object.data?.objectId}>{object.data?.objectId}</li>
// 			))}
// 		</ul>
// 	);
// }

export default App
