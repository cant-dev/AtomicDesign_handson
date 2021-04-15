import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./conponents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./conponents/atoms/button/SecondaryButton";
import { SearchInput } from "./conponents/molecules/SearchInput";
import { UserCard } from "./conponents/organisms/user/UserCard";
import { DefaultLayout } from "./conponents/templates/DefaultLayout";
import "./styles.css";

const user = {
  name: "YaSs",
  image: "https://source.unsplash.com/ZRZSmK362Xw",
  mail: "aaa@bbb.com",
  phone: "000-111-222",
  company: {
    name: "テスト株式会社"
  },
  website: "AAAAA.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
