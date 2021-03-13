import ProForm, { ProFormDateRangePicker, ProFormSelect, ProFormText } from "@ant-design/pro-form";
import React, { useState } from "react";
import { Input, Button } from 'antd'

import style from './index.less';

const adminManagement = () => {
  const [passwordAble, setPasswordAble] = useState(false);
  const [reSetVisibility, setReSetVisibility] = useState<'block' | 'none'>('block');
  const [ocVisibility, setOcSetVisibility] = useState<'block' | 'none'>('none');

  return (
    <>
      <ProForm<{
        id: String
      }>
        onFinish={async (values) => {
          // await waitTime(2000);
          // console.log(values);
          // message.success('提交成功');
        }}
      // initialValues={{
      //   name: '蚂蚁设计有限公司',
      //   useMode: 'chapter',
      // }}
      >
        <ProForm.Group>
          <ProFormText
            width='md'
            name='id'
            label='管理员ID'
            tooltip='管理员的唯一标识'
            placeholder=''
            disabled
          />
          <ProFormText
            width='md'
            name='name'
            label='姓名'
            placeholder=''
            disabled
          />
          <ProFormText
            width='md'
            name='userId'
            label='工号'
            placeholder=''
            disabled
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            name='createdTime'
            width='md'
            label='创建日期'
            placeholder=''
            disabled
          />
          <div>
            <div>密码</div>
            <Input.Password
              disabled={!passwordAble}
              visibilityToggle={false}
              defaultValue='111'
              style={{ padding: '0', marginBottom: '22px', marginTop: '6px', height: '33px', width: '220px' }}
              className={style.float}
              required
            />
            <Button
              style={{ display: reSetVisibility, marginTop: '6px' }}
              onClick={() => {
                setReSetVisibility('none');
                setOcSetVisibility('block');
                setPasswordAble(true);
              }}
            >
              重置
            </Button>
            <Button
              onClick={() => {
                setReSetVisibility('block');
                setOcSetVisibility('none');
                setPasswordAble(false);
              }}
              style={{ display: ocVisibility, marginTop: '6px' }}
              className={style.float}
            >
              确认
              </Button>
            <Button
              onClick={() => {
                setReSetVisibility('block');
                setOcSetVisibility('none');
                setPasswordAble(false);
              }}
              style={{ display: ocVisibility, marginTop: '6px' }}
            >
              取消
              </Button>
          </div>

          {/* <ProFormDateRangePicker width="md" name={['contract', 'createTime']} label="合同生效时间" /> */}
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width='md'
            name='phoneNumber'
            label='手机号'
            placeholder=''
            rules={[{ required: true, message: '手机号不能为空' }]}
          />
          <ProFormText
            width='md'
            name='email'
            label='Email'
            placeholder=''
            rules={[{ required: true, message: 'Email不能为空' }]}
          />
        </ProForm.Group>
        {/* <ProForm.Group>
          <ProFormSelect
            options={[
              {
                value: 'chapter',
                label: '盖章后生效',
              },
            ]}
            readonly
            width="xs"
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormSelect
            width="xs"
            options={[
              {
                value: 'time',
                label: '履行完终止',
              },
            ]}
            name="unusedMode"
            label="合同约定失效效方式"
          />
        </ProForm.Group> */}
        {/* <ProFormText width="sm" name="id" label="主合同编号" />
        <ProFormText name="project" width="md" disabled label="项目名称" initialValue="xxxx项目" />
        <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" /> */}
      </ProForm>
      <div>adminManagement</div>
    </>
  );
}

export default adminManagement;