import Audio from "./audio";
const Projects = () => {
    return (
      <div className="p-3 mt-8">
        <h2 className="text-white font-normal text-xl mb-4">Pro<span className="font-light text-[#888888]">jects</span></h2>
        <section className="flex gap-7">
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
                    <a href='https://github.com/pegasus4me/Kozo' className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">kuzo</a>
                    <p className="text-white mt-2 ">
                        a fullstack social media app like reddit 
                        build with Nextjs + typescript + tailwindcss + pusherjs
                    </p>
                </article>
                <article className=" p-2">
                    <div className="flex items-center gap-5">
                    <a href='https://github.com/pegasus4me/dense' className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">dense</a>
                    
                    </div>
                    <p className="text-white mt-2">
                        a decentralised foundraising app 
                        build with solidity + nextjs and TS
                    </p>
                </article>
                <article className=" p-2">
                    <a href='https://github.com/pegasus4me/TheTempestCasino' className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">TheTempestCasino</a>
                    <p className="text-white mt-2">
                        Smart contracts builds with solidity 
                        and hardhat + TS for units tests
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
                    <a href="https://github.com/pegasus4me/Dapp_01.git" className="underline text-[#CFCFCF] underline-offset-4 decoration-dotted">Distortion stake</a>
                    </div>
                    <p className="text-white mt-2">
                       decentralised application where user can stake/ unstake their eth and earn stacking rewards 
                        built with solidity for the smart contracts + hardhat for the dev environement on backend size and nextjs + viem + wagmi on client side 
                    </p>
                </article>
            </div>
        </section>

      </div>
    );
  };
  
  export default Projects;
