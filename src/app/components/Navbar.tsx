"use client";

import "../styles/navbar.css";

import Image from "next/image";
import returnZeroDp from "@public/return-zero-logo.jpg";

import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";

const Navbar = () => {
  const account = useActiveAccount();

  return (
    <nav
      className="bg-slate-100 border-b-2 border-b-slate-300"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <div className="mx-auto max-w-7xl px2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-centre">
              <Image
                src={returnZeroDp}
                alt="BlockFund"
                width={32}
                style={{
                  filter: "drop-shadow(0px 0px 24px #7FB22D)",
                }}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block flex">
              <div className="flex space-x-4">
                <Link href={"/"}>
                  <p
                    className="test-css-class rounded-md px-3 py-2 text-sm font-medium text-slate-700"
                    style={{ margin: 6 }}
                  >
                    Campaigns
                  </p>
                </Link>
                {account && (
                  <Link href={`/dashboard/${account?.address}`}>
                    <p
                      className="rounded-md px-3 py-2 text-sm font-medium text-slate-700"
                      style={{ margin: 6 }}
                    >
                      Dashboard
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ConnectButton
              client={client}
              theme={lightTheme()}
              detailsButton={{
                style: {
                  maxHeight: "50px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
