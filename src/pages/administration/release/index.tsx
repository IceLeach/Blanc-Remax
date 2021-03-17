import React, { useEffect, useState } from "react";
import { Select, Button, Input } from 'antd';

const release = () => {
  const [templates, setTemplates] = useState<any[] | null>(null);

  useEffect(() => {
    //取得模板
    setTemplates([]);
  }, [])

  return (
    <>
      <Select defaultValue='' onChange={() => { }}>
        <Select.Option value=''>
          <a>不使用模板</a>
        </Select.Option>
        {templates?.map(template => {
          //模板ID+模板名
          <Select.Option value=''>
            <a>{template}</a>
          </Select.Option>
        })}
      </Select>
      <div>
        <Input placeholder='字段名' />
      </div>
      <div>
        <Button>增加一行</Button>
      </div>
      <div>release</div>
    </>
  );
}

export default release;