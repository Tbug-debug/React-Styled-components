import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

/* 버튼 시작 */

const ButtonTop = styled.div`
  margin-bottom: 40px;
`;

const Button = styled.button`
  position: relative;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  position: relative;
  border: none;
`;

const LargePrime = styled(Button)`
  background-color: aliceblue;
  padding: 15px 50px;
  color: #1e6b7b;
  cursor: pointer;
  &:hover {
    color: #537fe7;
  }
`;

const MidleBtn = styled(Button)`
  background-color: #f6f7c1;
  padding: 15px 40px;
  margin-left: 20px;
  cursor: pointer;
  color: #609ea2;
  &:hover {
    color: #f94a29;
  }
`;

const SmallBtn = styled(Button)`
  background-color: #d1fff3;
  padding: 15px 20px;
  margin-left: 20px;
  cursor: pointer;
  color: #20262e;
  &:hover {
    color: #f94a29;
  }
`;

const LargeUnderBtn = styled(LargePrime)`
  background-color: ${(props) => props.theme.lgBtnU};
`;

const MediumUnderBtn = styled(MidleBtn)`
  background-color: ${(props) => props.theme.mdBtnU};
`;

const SmallUnderBtn = styled(SmallBtn)`
  background-color: ${(props) => props.theme.smBtnU};
`;

/* 버튼 끝 */

/* 인풋 시작 */

const InputBtn = styled(SmallUnderBtn)`
  padding: 10px 20px;
  background-color: #537fe7;
`;

const InputTag = styled.span`
  font-weight: bolder;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-left: 10px;
`;

const InputIn = styled.input`
  border: 2px solid black;
  padding: 10px;
  border-radius: 20px;
`;

/* 인풋 끝 */

/* 모달 시작 */

const Modalback = styled.div`
  width: 400px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #00425a;
  border-radius: 10px;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
  }
`;

const ModalClose = styled(SmallBtn)`
  margin: 10px 10px;
`;

const ModalOpen = styled(MidleBtn)`
  background-color: #bef0cb;
`;

const ModalOpenTwo = styled(MidleBtn)`
  color: #c92c6d;
  background-color: #609ea2;
`;

/* 모달 끝 */

/* select 시작 */

const SelectsBars = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  height: 150px;
  border: 3px solid rgba(0, 0, 0, 0.5);
  padding-top: 10px;
  padding-left: 20px;
`;

const SelecbarOutNoHidden = styled.div`
  width: 30%;
`;

const SelectBar = styled.div`
  border: 3px solid black;
  width: 50%;
  padding: 5px;
  display: block;
  cursor: pointer;
  display: flex;
  font-weight: bolder;
  flex-direction: column;
`;

const SeletBarClick = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectBarOut = styled.div`
  height: 150px;
  overflow: hidden;
  width: 30%;
`;
const SelectbarOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid black;
  font-weight: bolder;
  margin-top: 8px;
  background-color: white;
  &:hover {
    background-color: #e9f8f9;
  }
`;

/* select 끝 */

function Bmt() {
  const [comma, setComma] = useState("");
  const [text, setText] = useState("");
  const [modal, setModal] = useState(false);
  const [modaltwo, setModaltwo] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsTwo, setShowOptionsTwo] = useState(false);
  const options = ["JavaScript", "Python", "React", "Java", "Spring"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedHidenOption, setSelectedHidenOption] = useState(options[0]);

  /* 버튼 함수 시작 */

  const handleOnclick = () => {
    alert("버튼을 만들었습니다.");
  };

  const handleUOnclick = () => {
    prompt("재미있나요?");
  };

  /* 버튼 함수 끝 */

  /* 인풋 함수 시작 */

  const changeEnteredNum = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const regex = /[^0-9]/g;
    const result = value.replace(regex, "");
    console.log(result === "");
    if (result === "") {
      window.location.reload();
    } else {
      const comaOne = Number(value.replaceAll(",", ""));
      setComma(comaOne.toLocaleString());
    }
  };

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const SubmitValue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = { text, comma };
    alert(JSON.stringify(obj));
  };

  /* 인풋 함수 끝 */

  /* 모달 함수 시작 */

  const turnOffModal = () => {
    setModal(false);
    setModaltwo(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const openModalTwo = () => {
    setModaltwo(true);
  };

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (modaltwo && !modalRef.current?.contains(e.target)) {
        setModaltwo(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [modaltwo]);

  /* 모달 함수 끝 */

  /* Select 함수 시작 */

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowOptionsTwo(false);
  };

  const handleOptionHidenClick = (option: string) => {
    setSelectedHidenOption(option);
    setShowOptions(false);
  };

  /* Select 함수 끝 */

  return (
    <div>
      <h1>Button</h1>
      <ButtonTop>
        <LargePrime onClick={handleOnclick}>Large Prime Button</LargePrime>
        <MidleBtn>Middle</MidleBtn>
        <SmallBtn>Small</SmallBtn>
      </ButtonTop>
      <div>
        <LargeUnderBtn onClick={handleUOnclick}>
          Large Prime Button
        </LargeUnderBtn>
        <MediumUnderBtn>Middle</MediumUnderBtn>
        <SmallUnderBtn>Small</SmallUnderBtn>
      </div>
      <div>
        <h1>Input</h1>
        <form onSubmit={SubmitValue}>
          <InputTag>이름: </InputTag>
          <InputIn type="text" value={text} onChange={changeText} />
          <InputTag>가격: </InputTag>
          <InputIn type="text" value={comma} onChange={changeEnteredNum} />
          <InputBtn>제출</InputBtn>
        </form>
      </div>
      <div>
        <h1>Modal</h1>
        <div>
          <div>
            <ModalOpen onClick={openModal}>Open the Modal</ModalOpen>
            <ModalOpenTwo onClick={openModalTwo}>Open the Modal</ModalOpenTwo>
            {modal ? (
              <Modalback>
                <div>
                  <ModalClose onClick={turnOffModal}>Close</ModalClose>
                  <ModalClose>Next</ModalClose>
                </div>
              </Modalback>
            ) : null}
            {modaltwo ? (
              <Modalback ref={modalRef}>
                <div>
                  <ModalClose onClick={turnOffModal}>Close</ModalClose>
                </div>
              </Modalback>
            ) : null}
          </div>
        </div>
      </div>
      <h1>Select</h1>
      <SelectsBars>
        <SelecbarOutNoHidden>
          <SelectBar>
            <SeletBarClick onClick={() => setShowOptions(!showOptions)}>
              {selectedHidenOption}
              <FontAwesomeIcon icon={faArrowDown} />
            </SeletBarClick>
            {showOptions && (
              <div>
                {options.map((option) => (
                  <SelectbarOption
                    key={option}
                    onClick={() => handleOptionHidenClick(option)}
                  >
                    {option}
                  </SelectbarOption>
                ))}
              </div>
            )}
          </SelectBar>
        </SelecbarOutNoHidden>
        <SelectBarOut>
          <SelectBar>
            <SeletBarClick onClick={() => setShowOptionsTwo(!showOptionsTwo)}>
              {selectedOption}
              <FontAwesomeIcon icon={faArrowDown} />
            </SeletBarClick>
            {showOptionsTwo && (
              <div>
                {options.map((option) => (
                  <SelectbarOption
                    key={option}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </SelectbarOption>
                ))}
              </div>
            )}
          </SelectBar>
        </SelectBarOut>
      </SelectsBars>
    </div>
  );
}

export default Bmt;
