import { ReadMainObjective, ReadSubAObjective, ReadSubBObjective } from "../../Utils/QuestParams/objective_utils";
import { useQuestData } from "../../Hooks/useQuestData";
import { useState } from "react";
import { CheckBoxInput, NumeralInput } from "../../Components/Form/InputComponent";
import SelectComponent from "../../Components/Form/SelectComponent";
import Panel from "../../Components/Panel";
import { ItemsOptions } from "../../Data/items";
import { MonsterOptions } from "../../Data/monsters";
import { ObjectivesOptions } from "../../Data/objectives";
import { ReadQuestFlags1, ReadQuestFlags2, ReadQuestFlags3 } from "../../Utils/QuestParams/flag_utils";
import { useEffect } from "react";

const QuestFlags = () => {

  const { questDataView } = useQuestData();
  
  const [flagArray, setFlagArray] = useState(ReadQuestFlags1(questDataView));
  const [flagArray2, setFlagArray2] = useState(ReadQuestFlags2(questDataView));
  const [flagArray3, setFlagArray3] = useState(ReadQuestFlags3(questDataView));

  const toggleFlag1 = (idx) => {
    let tmp = flagArray.map((flagObj, i) => {
      
      if(i === idx){
        return {...flagObj, flag: !flagObj.flag}
      }

      return flagObj
    });
    setFlagArray(tmp);
  }

  const toggleFlag2 = (idx) => {
    let tmp = flagArray2.map((flagObj, i) => {
      
      if(i === idx){
        return {...flagObj, flag: !flagObj.flag}
      }

      return flagObj
    });
    setFlagArray2(tmp);
  }

  const toggleFlag3 = (idx) => {
    let tmp = flagArray3.map((flagObj, i) => {
      
      if(i === idx){
        return {...flagObj, flag: !flagObj.flag}
      }

      return flagObj
    });
    setFlagArray3(tmp);
  }

  return(
    <Panel>
        <h1>Quest Flags</h1>
        <div className="">
          <h2>Flag set 1</h2>
          <div className="flex justify-between gap-x-3 mt-1 flex-wrap">
            {
              flagArray.map((flag, idx) => {
                return <CheckBoxInput label={flag.label} defaultValue={flag.flag} onChange={() => toggleFlag1(idx)} />
              })
            }
          </div>
          <h2>Flag set 2</h2>
          <div className="flex justify-between gap-x-3 mt-1 flex-wrap">
            {
              flagArray2.map((flag, idx) => {
                return <CheckBoxInput label={flag.label} defaultValue={flag.flag} onChange={() => toggleFlag1(idx)} />
              })
            }
          </div>
          <h2>Flag set 3</h2>
          <div className="flex justify-between gap-x-3 mt-1 flex-wrap">
            {
              flagArray3.map((flag, idx) => {
                return <CheckBoxInput label={flag.label} defaultValue={flag.flag} onChange={() => toggleFlag1(idx)} />
              })
            }
          </div>
        </div>
      </Panel>
  );
}

export default QuestFlags;