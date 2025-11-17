import Audio from "./audio";
const Projects = () => {
    return (
      <div className="p-3 mt-8">
        <h2 className="text-white font-normal text-xl mb-4">Pro<span className="font-light text-[#888888]">jects</span></h2>
        <section className="flex flex-col-reverse md:flex-row">
            <div>
    
                <article className=" p-2">
                    <a href='https://github.com/pegasus4me/qoak-V2' className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">qoak</a>
                    <p className="text-white mt-2">
                        a fullstack social media app like omegle but for messaging 
                        build with Nextjs + typescript + tailwindcss + prisma
                    </p>
                </article>
                <article className=" p-2">
                    <a href='https://github.com/pegasus4me/prod' className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">orion</a>
                    <p className="text-white  ">
                        a fullstack time track app build with 
                        react + tailwindcss + express/sql
                    </p>
                </article>
                <article className=" p-2">
                    <a href='https://github.com/pegasus4me/st' className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">st.dev</a>
                    <p className="text-white mt-2">
                        personal site build with nextjs
                    </p>
                </article>
            </div>
            <div>
                <article className=" p-2">
                   <div className="flex items-center gap-4">
                   <a href='https://github.com/Monkeey' className="underline text-orange-400 underline-offset-4 decoration-dotted">Monkeey</a>
                   <Audio name="live"/>
                   </div>
                    <p className="text-white mt-2">
                        One click Deployment infrastructure that fixes itself, we vibecode now we need to vibeDeploy, built Solo in 6 hours during hackaton in station F, nomined as finalist from 400 participants and 120 teams
                        Built using typescript for the backend with express | Mistral + langgraph for agentics orchestration | nextjs+TS for the frontend 
                    </p>
            </article>
            <article className=" p-2">
                   <div className="flex items-center gap-4">
                   <a href='https://github.com/sourcerr' className="underline text-orange-400 underline-offset-4 decoration-dotted">Monkeey</a>
                   <Audio name="live"/>
                   </div>
                    <p className="text-white mt-2">
                        A AI sourcing compagnion that lets you source top talents based on recruiters requirements, we source talents from a data sources with more than 800M+ profiles
                        used Python | langgraph | and grok as LLM + Typescript + nextjs as frontend tech | postgreSQL as DB | people data labs as data source layer
                    </p>
            </article>
            <article className=" p-2">
                   <div className="flex items-center gap-4">
                   <a href='https://github.com/Monadex-Labs' className="underline text-orange-400 underline-offset-4 decoration-dotted">Monadex labs</a>
                   <Audio name="live"/>
                   </div>
                    <p className="text-white mt-2">
                        Co-founder and current CEO of Monadex Labs, currently building the next DEX custom and gamified experience on Monad L1
                        Starting from 0 we achieved +500k unique users, more than 4M transactions mades, 40k followers across socials, and 4millions usd TVL at peak on testnet
                    </p>
            </article>
            <article className=" p-2">
                    <a href='https://github.com/pegasus4me/Kozo' className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">kuzo</a>
                    <p className="text-white mt-2 ">
                        a fullstack social media app like reddit 
                        build with Nextjs + typescript + tailwindcss + pusherjs
                    </p>
                </article>
                <article className=" p-2">
                    <div className="flex items-center gap-5">
                    <a href="https://github.com/pegasus4me/Qamar-MVP" className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">Qamar studio</a>
                    </div>
                    <p className="text-white mt-2">
                       platform who connects consultants and students fully working + payment integrated
                    </p>
                </article>
                <article className=" p-2">
                    <div className="flex items-center gap-5">
                    <a href="https://github.com/pegasus4me/paystream-interface" className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">Paystream</a>
                    </div>
                    <p className="text-white mt-2">
                      Project built on 3 days for Paypal stablecoin hackaton who permits users to live stream money from peer2peer 
                    </p>
                </article>
                <article className=" p-2">
                    <div className="flex items-center gap-5">
                    <a href="https://github.com/pegasus4me/Dapp_01.git" className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">Distortion stake</a>
                    </div>
                    <p className="text-white mt-2">
                       decentralised application where user can stake/ unstake their eth and earn stacking rewards 
                        built with solidity for the smart contracts + hardhat for the dev environement on backend size and nextjs + viem + wagmi on client side 
                    </p>
                </article>
                <article className=" p-2">
                    <div className="flex items-center gap-5">
                    <a href="https://github.com/pegasus4me/Linke.fi" className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">Linki.fi</a>
                    </div>
                    <p className="text-white mt-2">
                       Dapp Built with on the ERC4626 implementation who takes USDC as underlined assets and give to stakers vSUsdc with 1.5% apy and takes 0.5% for deposit and withdraws 
                        Built used solidity + viem + wagmi + wallet connect for the wallet integration and hardhat for the contracts environment
                    </p>
                </article>
                  <article className=" p-2">
                    <div className="flex items-center gap-5">
                    <a href="https://github.com/pegasus4me/sabre-DAO" className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">Sabre DAO</a>
                    </div>
                    <p className="text-white mt-2">
                       a decentralised VC leveraging the power of community to build a more fair and distributed investment power among the participants.
                       <span className="text-orange-400 text-sm italic">Got the 6th place on lw3 hackaton</span>
                    </p>
                </article>
            </div>
        </section>

      </div>
    );
  };
  
  export default Projects;

