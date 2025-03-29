import './App.css'
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit'
import { Navbar } from './Components/navbar/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Services } from './Components/Services';
import { Appointment } from './Components/Appointment';
import { Blogs } from './Components/Blogs';
import Footer from './Components/Footer';
import Contact from './Components/models/Contact';

function App() {

  const account = useCurrentAccount();

  return (
    <div>
        <Navbar />
      <nav>
        <main>
        <ConnectButton/>
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

      {/* <Contact /> */}
            MedVualt
      </nav>
      <section>
        {account ? (
          <p>Your address is {account.address}</p>
        ) : (
          <p>No wallet connected</p>
        )}
      </section>

        <Footer />
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
