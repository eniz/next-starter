import Link from "next/link";

import * as S from "./style";

const Header = () => (
  <div>
    <S.Header>El Header</S.Header>

    <Link href="/">
      <a>Anasayfa</a>
    </Link>
    <Link href="/detail">
      <a>Detail</a>
    </Link>
    <Link href="/list">
      <a>List</a>
    </Link>
  </div>
);

export default Header;
