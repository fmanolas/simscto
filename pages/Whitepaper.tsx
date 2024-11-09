// pages/whitepaper.tsx
import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { Orbitron, Poppins } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Whitepaper() {
  return (
    <div className={`${styles.homeBackground}  `}>
      <Header />
      <main
        className={`flex flex-col items-start justify-start w-full px-6 py-10 space-y-8 max-w-4xl text-left mt-8 ${styles["text-container"]} `}
      >
        <div className="py-10">
          <h1
            className={`text-3xl font-bold text-center w-full text-2xl py-10   ${orbitron.className}`}
          >
            SIMS White Paper
          </h1>
        </div>

        <section className="mt-8">
          <h2 className={`text-2xl  font-bold  ${orbitron.className}  `}>
            Abstract
          </h2>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className} `}>
            SIMS is a community-centered cryptocurrency project founded on the
            principles of trust, respect, inclusivity, and integrity. In an
            ecosystem often marked by anonymity and lack of transparency, SIMS
            aspires to be a beacon of ethical standards and collective
            responsibility within decentralized finance. Through a structured
            governance model, a focus on security, and an active community, SIMS
            seeks to create a welcoming and resilient platform for all members.
          </p>
        </section>

        <section className="mt-8">
          <h2 className={`text-2xl font-bold  ${orbitron.className} `}>
            1. Introduction
          </h2>
          <p className={`leading-relaxed mt-4 text-lg ${poppins.className} `}>
            The SIMS project was established on four core values that drive our
            community: trust, respect, inclusivity, and integrity. As a
            decentralized, community-driven initiative, SIMS relies on the
            collective strength of its members. Our aim is to cultivate an
            environment where each contribution, regardless of size, is valued
            and appreciated. Every SIMS community member is a vital part of this
            ecosystem, united by a shared vision to make a positive impact in
            the crypto space.
          </p>
        </section>

        <section className="mt-8 text-left">
          <h2
            className={`text-3xl font-bold text-left  ${orbitron.className} `}
          >
            2. Vision and Mission
          </h2>
          <h3 className={`text-2xl font-semibold mt-4  ${orbitron.className} `}>
            Vision
          </h3>
          <p
            className={`leading-relaxed mt-2 text-left  ${poppins.className} `}
          >
            To establish SIMS as a transparent, ethical, and community-centered
            cryptocurrency project where each member’s voice matters, and every
            action reflects the principles of integrity and inclusivity.
          </p>
          <h3
            className={`text-2xl font-semibold mt-4 text-left  ${orbitron.className} `}
          >
            Mission
          </h3>
          <p
            className={`leading-relaxed mt-2  text-left  ${poppins.className} `}
          >
            SIMS is not just a cryptocurrency but a movement. We strive to
            create a decentralized platform that empowers individuals, embraces
            diverse voices, and fosters an atmosphere of mutual respect and
            collaboration.
          </p>
        </section>
        <section className="mt-8">
          <h2 className={`text-2xl font-bold  ${orbitron.className} `}>
            3. Governance Model
          </h2>
          <h3 className={`text-3xl font-semibold mt-4  ${orbitron.className} `}>
            3.1 Community-Led Decision Making
          </h3>
          <p className={`leading-relaxed mt-2 text-lg  ${poppins.className} `}>
            SIMS operates on a community-driven governance model. Key decisions
            are made through community voting, ensuring that the direction of
            the project aligns with the collective will of the members. This
            model provides each member with a stake in SIMS's future,
            reinforcing the project’s commitment to transparency and
            inclusivity.
          </p>
          <h3 className={`text-3xl font-semibold mt-4  ${orbitron.className} `}>
            3.2 Leadership Structure
          </h3>
          <p className={`leading-relaxed mt-2 text-lg  ${poppins.className} `}>
            To maintain an organized decision-making process, SIMS has
            established Senior and Junior Leadership Councils. These councils
            facilitate discussions among community leaders and wallet signers,
            allowing them to consult with the community before making final
            decisions on crucial matters. This layered approach ensures that
            every proposal undergoes thorough consideration and that all voices
            are heard.
          </p>
        </section>
        <section className="mt-8">
          <h2 className={`text-2xl font-bold  ${orbitron.className} `}>
            4. Security and Financial Accountability
          </h2>
          <h3 className={`text-3xl font-semibold mt-4  ${orbitron.className} `}>
            4.1 Multi-Signature Wallets
          </h3>
          <p className={`leading-relaxed mt-2 text-lg  ${poppins.className} `}>
            Financial security is critical to SIMS's integrity. After
            experiencing prior security challenges, the team has implemented a
            multi-signature wallet to safeguard community funds. This wallet
            requires approval from multiple trusted signers, ensuring that funds
            are managed responsibly and with consensus. The use of multi-sig
            wallets also mitigates the risk of single-point failures and
            enhances transparency.
          </p>
          <h3 className={`text-3xl font-semibold mt-4  ${orbitron.className} `}>
            4.2 Rebuilding Trust
          </h3>
          <p className={`leading-relaxed mt-2 text-lg  ${poppins.className} `}>
            In response to previous incidents that jeopardized community trust,
            SIMS leadership took decisive steps to restore integrity. A new
            wallet was created, secured by reliable, community-trusted signers,
            and funded to demonstrate a renewed commitment to security. This act
            of transparency and accountability is central to SIMS's pledge to
            protect community assets and reinforce the trust of its members.
          </p>
        </section>
        <section className="mt-8">
          <h2 className={`text-2xl font-bold  ${orbitron.className} `}>
            5. Marketing and Community Engagement
          </h2>
          <p className={`leading-relaxed mt-2 text-lg  ${poppins.className} `}>
            SIMS’s marketing strategy is grounded in community engagement,
            transparency, and storytelling. The project has a dedicated plan for
            promoting SIMS through community-led marketing efforts that
            emphasize authenticity and inclusivity.
          </p>
          <h3 className={`text-3xl font-semibold mt-4  ${orbitron.className} `}>
            5.1 Branding and Content Updates
          </h3>
          <p className={`leading-relaxed mt-2 text-lg  ${poppins.className} `}>
            All branding assets, including banners, Twitter content, and bot
            interactions, are updated to align with SIMS's values and avoid
            copyright issues. This refresh symbolizes a clean, unified vision
            for the project.
          </p>
          <h3 className={`text-3xl font-semibold mt-4  ${orbitron.className} `}>
            5.2 Community Storytelling
          </h3>
          <p className={`leading-relaxed mt-2 text-lg  ${poppins.className} `}>
            SIMS has created a unique lore that resonates with its members. For
            instance, the initial "50 SOL buy and burn" story serves as a
            rallying point, encouraging new participants to contribute. The
            narrative centers on the shared journey and trials that the
            community has faced and overcome, fostering a sense of unity and
            purpose.
          </p>
        </section>

        <section className="mt-8 text-left">
          <h2 className={`text-2xl font-bold  ${orbitron.className} `}>
            6. Roadmap and Objectives
          </h2>

          <div className="mt-8  max-w-3xl ">
            <h3 className={`text-3xl font-bold mt-6  ${orbitron.className} `}>
              6.1 Short-Term Objectives
            </h3>
            <ul
              className={`list-disc pl-8 mt-4 text-lg ${poppins.className}  `}
            >
              <li>
                <span className="font-semibold ">DEX Listing:</span> Secure a
                listing on a decentralized exchange to increase accessibility
                and trading volume.
              </li>
              <li>
                <span className="font-semibold ">
                  Community-Driven Marketing:
                </span>{" "}
                Leverage community raids, social media engagement, and bot-led
                marketing to raise awareness.
              </li>
              <li>
                <span className="font-semibold ">Enhanced Governance:</span>{" "}
                Introduce a structured voting mechanism to streamline
                decision-making and ensure fair representation.
              </li>
            </ul>

            <h3 className={`text-3xl font-bold mt-6  ${orbitron.className} `}>
              6.2 Long-Term Goals
            </h3>
            <ul className={`list-disc pl-8 mt-4 text-lg ${poppins.className} `}>
              <li>
                <span className="font-semibold ">Expand Community Trust:</span>{" "}
                Foster an inclusive community where members feel empowered to
                contribute and participate.
              </li>
              <li>
                <span className="font-semibold ">
                  Community-Impact Initiatives:
                </span>{" "}
                Use funds from the marketing wallet to support local causes
                chosen by the community, showcasing SIMS's commitment to social
                impact.
              </li>
              <li>
                <span className="font-semibold ">Global Expansion:</span>{" "}
                Establish SIMS as a global platform for inclusivity, where
                people from all backgrounds can engage and thrive.
              </li>
              <li>
                <span className="font-semibold ">NFT Collection:</span> Launch
                an NFT collection that represents SIMS’s unique community
                spirit, lore, and values. This collection will serve as a symbol
                of belonging and recognition within the SIMS ecosystem.
                <ul className="list-disc pl-8 mt-2">
                  <li>
                    <span className="font-semibold ">Purpose:</span> The NFT
                    collection will provide members with unique, digital assets
                    that reinforce their connection to SIMS.
                  </li>
                  <li>
                    <span className="font-semibold ">Impact:</span> Proceeds
                    from NFT sales can be allocated to community-impact
                    initiatives, furthering SIMS’s mission to make a positive
                    social impact.
                  </li>
                  <li>
                    <span className="font-semibold ">Execution:</span> The NFT
                    collection will be launched on popular blockchain
                    marketplaces, making it accessible to both SIMS community
                    members and new supporters.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className={`mt-8 `}>
          <h2 className={`text-2xl font-bold  ${orbitron.className}`}>
            7. Resilience and Adaptability
          </h2>
          <p className={`leading-relaxed mt-4 text-lg ${poppins.className}`}>
            TThe SIMS project is no stranger to adversity. Past challenges have
            tested the community's resilience, leading to the creation of a
            security-enhanced, multi-signature wallet and renewed pledges from
            leadership. These experiences have reinforced SIMS's commitment to
            integrity, inspiring the community to continue building and
            adapting.
          </p>
        </section>

        <section
          className={`mt-8 text-left max-w-3xl mx-auto ${styles[" text-container "]}`}
        >
          <h2 className={`text-2xl font-bold  ${orbitron.className}`}>
            8. Tokenomics
          </h2>
          <p className={`leading-relaxed mt-4 text-lg ${poppins.className} `}>
            The SIMS project incorporates a tokenomics model that balances
            deflationary mechanisms, strategic marketing, and community-oriented
            initiatives. This structure is designed to support long-term growth,
            enhance the token’s value, and empower community members.
          </p>

          <div className="mt-8 ">
            <h3 className={`text-3xl font-bold mt-6  ${orbitron.className}`}>
              8.1 Burn Wallets and Total Burned Supply
            </h3>
            <ul className={`list-disc pl-8 mt-4 text-lg ${poppins.className} `}>
              <li>
                <span className="font-semibold ">
                  Original Burn Wallet (OBW):
                </span>{" "}
                The OBW holds a significant portion of burned $SIMS, effectively
                removing these tokens from circulation. This wallet’s
                transactions are publicly verifiable on Solscan.
              </li>
              <li>
                <span className="font-semibold ">
                  Future Burn Wallet (FBW):
                </span>{" "}
                The community has selected the Sol Incinerator as the official
                platform for future token burns, ensuring transparent and
                accountable burning practices.
              </li>
              <li>
                <span className="font-semibold ">
                  Locked Marketing Wallet (LMW):
                </span>{" "}
                Initially intended for marketing, this wallet is now a burn
                wallet due to lost keys. If keys are recovered, the community
                will vote on the 4 SOL balance allocation, with 50 million $SIMS
                to be burned as per community vote.
              </li>
              <li>
                <span className="font-semibold ">Total Burned Supply:</span>{" "}
                With 136.23 million $SIMS in OBW and 50 million $SIMS locked in
                LMW, the total burned supply stands at 18.62% of the initial
                supply as of 11/4/2024.
              </li>
            </ul>

            <h3 className={`text-3xl font-bold mt-6  ${orbitron.className}`}>
              8.2 Current Marketing Wallet (MW)
            </h3>
            <p className={`leading-relaxed mt-4 text-lg ${poppins.className} `}>
              <span className="font-semibold ">Solscan:</span> The SIMS
              community controls the MW, with fund usage subject to community
              voting, ensuring transparency, accountability, and alignment with
              community values.
            </p>

            <h3 className={`text-3xl font-bold mt-6  ${orbitron.className}`}>
              8.3 Vision for the 50 Million $SIMS in MW
            </h3>
            <ul className={`list-disc pl-8 mt-4 text-lg ${poppins.className}`}>
              <li>
                <span className="font-semibold ">
                  Burn Allocation (1/3 of MW):
                </span>{" "}
                Regular burns reduce circulating supply, enhancing the
                deflationary nature of $SIMS.
                <ul className="list-disc pl-8 mt-2">
                  <li>
                    <span className="font-semibold ">Execution:</span> Burns
                    conducted using FBW ensure transparency.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold ">
                  Marketing Allocation (1/3 of MW):
                </span>{" "}
                These funds support marketing campaigns, promoting SIMS and
                fostering growth.
                <ul className="list-disc pl-8 mt-2">
                  <li>
                    <span className="font-semibold ">Execution:</span> Community
                    votes determine campaigns, including social media
                    promotions, ads, or strategic partnerships.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold ">
                  Community Initiatives Allocation (1/3 of MW):
                </span>{" "}
                Funds support initiatives that benefit members and local
                communities.
                <ul className="list-disc pl-8 mt-2">
                  <li>
                    Members propose initiatives with clear plans and budgets.
                  </li>
                  <li>
                    Community voting directs funds to meaningful causes aligned
                    with SIMS’s values.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className="mt-8 text-left max-w-3xl mx-auto">
          <h2 className={`text-2xl font-bold  ${orbitron.className}`}>
            9. Conclusion
          </h2>
          <p className={`leading-relaxed mt-4 text-lg ${poppins.className} `}>
            SIMS stands as a testament to the power of community in the
            decentralized finance space. By prioritizing transparency,
            inclusivity, and collective responsibility, SIMS has created a
            platform where each member’s voice contributes to the project’s
            growth and stability. As SIMS moves forward, it will continue to
            embrace its core values, foster community empowerment, and work
            toward becoming a positive force in the crypto ecosystem.
          </p>
          <p className={`leading-relaxed mt-4 text-lg ${poppins.className} `}>
            SIMS is not just a coin; it is a movement for inclusivity, respect,
            and integrity. Through our shared commitment and relentless drive,
            SIMS will remain a pioneering example of community-led
            cryptocurrency. Together, we aim for the stars—united, resilient,
            and unstoppable.
          </p>

          <h3 className={`text-2xl font-semibold mt-6  ${orbitron.className}`}>
            Connect with us.
          </h3>

          <div className="flex flex-wrap  mt-4 text-left space-x-4">
            <a
              href="https://t.me/SIMSCTOSOL"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold hover:underline"
            >
              Telegram
            </a>
            <span>|</span>
            <a
              href="https://solscan.io/token/HgJN8j5QsbSKnwkthWAbEawPkXR1vB2TrAFiujV4pump"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold hover:underline"
            >
              CA
            </a>
            <span>|</span>
            <a
              href="mailto:ctosimz@gmail.com"
              className=" font-bold hover:underline"
            >
              Email
            </a>
            <span>|</span>
            <a
              href="https://x.com/simscoin?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold hover:underline"
            >
              X
            </a>
            <span>|</span>
            <a
              href="https://simscto.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold hover:underline"
            >
              Website
            </a>
          </div>
        </section>
        <section className="mt-8">
          <h2 className={`text-3xl font-bold  ${orbitron.className}`}>
            Legal Disclaimer for SIMS CTO Meme Coin
          </h2>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className}`}>
            <strong className={``}>Important Notice:</strong> The information
            provided in this document and on all associated platforms, including
            websites, social media channels, and promotional materials, is for
            informational and entertainment purposes only. SIMS CTO Meme Coin
            hereinafter referred to as “SIMS” is a novelty cryptocurrency and is
            not intended as an investment vehicle, nor does it claim to offer
            any financial returns, promises, or guarantees. The Coin is driven
            primarily by community participation and interest and holds no
            inherent or intrinsic value.
          </p>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className}`}>
            <strong className={``}>Risks:</strong> Cryptocurrency investments,
            especially meme coins, are speculative and highly volatile. The
            value of the Coin may experience extreme fluctuations or lose all
            value without warning. By purchasing or holding the Coin, you
            acknowledge and accept these risks. You should not participate if
            you cannot afford the potential loss of your entire investment.
          </p>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className}`}>
            <strong className={``}>Not Financial Advice:</strong> Nothing in
            this document or any communication from the SIMS CTO Meme Coin team
            should be interpreted as financial, legal, or investment advice. We
            recommend consulting with a qualified financial advisor before
            making any investment decisions. The Coin is created for
            entertainment purposes only, and its team disclaims all liability
            for any losses or damages incurred by users.
          </p>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className}`}>
            <strong className={``}>Regulatory Considerations:</strong>{" "}
            Cryptocurrencies may be subject to laws, regulations, and policies
            that vary by jurisdiction. By using the Coin, you confirm that you
            are legally permitted to participate in your jurisdiction and accept
            sole responsibility for complying with any applicable legal or
            regulatory requirements.
          </p>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className}`}>
            <strong className={``}>No Guarantees or Promises:</strong> The Coin
            is not affiliated with any corporation, brand, or individual named
            “SIMS” There are no assurances that any specific product
            development, community goals, or milestones will be achieved. The
            Coin’s existence, value, and ongoing community engagement are not
            guaranteed, and the Coin’s team reserves the right to modify,
            discontinue, or dissolve the project at any time without notice.{" "}
          </p>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className}`}>
            <strong className={``}>
              No Affiliation with "The Sims" Game or EA:
            </strong>{" "}
            SIMS CTO Meme Coin is not affiliated with, endorsed by, or connected
            to The Sims video game, its publisher Electronic Arts (EA), or any
            of its subsidiaries or affiliates. Any resemblance to names, themes,
            or concepts is coincidental and should not be interpreted as an
            association with the game The Sims or its related intellectual
            property.{" "}
          </p>
          <p className={`leading-relaxed mt-4 text-lg  ${poppins.className}`}>
            <strong className={``}>Disclaimer of Liability:</strong> To the
            fullest extent permitted by law, the Coin’s creators, developers,
            affiliates, and contributors shall not be liable for any direct,
            indirect, incidental, or consequential damages resulting from the
            use, purchase, or holding of the Coin. By participating in SIMS CTO
            Meme Coin, you acknowledge that you have read, understood, and
            agreed to this disclaimer.
          </p>
        </section>
        <footer className="mt-10">
          <p className={styles.simsGreen}>Last Updated: [11/4/2024]</p>
        </footer>
      </main>
    </div>
  );
}
