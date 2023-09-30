import { Nav_Links } from "../types";
import { AiFillContainer } from "react-icons/ai";

export const nav_links: Nav_Links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Features",
    href: "#features",
  },
  {
    id: 3,
    name: "Account",
    href: "#account",
  },
  {
    id: 4,
    name: "Reviews",
    href: "#reviews",
  },
];

export const account_items = [
  {
    id: 1,
    icon: AiFillContainer,
    title: "Invest any amount",
    content:
      "Whether it is $1 or $1,000,000, we can put your money to work for you.",
  },
  {
    id: 2,
    icon: AiFillContainer,
    title: "Build a balanced profile",
    content:
      "Invest in different industries to find the most opportunities to win huge.",
  },
  {
    id: 3,
    icon: AiFillContainer,
    title: "Trade in real-time",
    content:
      "Get insider tips on big stock moves and act on them within seconds.",
  },
  {
    id: 4,
    icon: AiFillContainer,
    title: "Profit from your network",
    content:
      "Invite new insiders to get tips faster and beat even other Investa users.",
  },
  {
    id: 5,
    icon: AiFillContainer,
    title: "Encrypted and anonymized",
    content:
      "Cutting-edge security technology that even the NSA does not know about keeps you hidden.",
  },
  {
    id: 6,
    icon: AiFillContainer,
    title: "Progress tracking",
    content:
      "Watch your investments grow exponentially, leaving other investors in the dust.",
  },
];

export const features_items = [
  {
    id: 1,
    icon: AiFillContainer,
    title: "Invite friends for better returns",
    content:
      "For every friend you invite to Investa, you get insider notifications 5 seconds sooner. And it is 10 seconds if you invite an insider.",
  },
  {
    id: 2,
    icon: AiFillContainer,
    title: "Notifications on stock dips",
    content:
      "Get a push notification every time we find out something that is going to lower the share price on your holdings so you can sell before the information hits the public markets.",
  },
  {
    id: 3,
    icon: AiFillContainer,
    title: "Invest what you want",
    content:
      "We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.",
  },
];
