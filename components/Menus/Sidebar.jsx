import Link from "next/link";
import { Flex, Button } from "rebass";

const Sidebar = () => (
  <Flex className="sidebar" flexDirection="column">
    <Link href="/">
      <a>Teach Yourself Code</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/tutorials">
      <a>Tutorials</a>
    </Link>
    <Link href="/subscriptions">
      <a>Your Courses</a>
    </Link>
    <Link href="/account">
      <a>Account</a>
    </Link>
    <Button sx={{ variant: "styles.buttons.primary" }}>Click</Button>
  </Flex>
);

export default Sidebar;
