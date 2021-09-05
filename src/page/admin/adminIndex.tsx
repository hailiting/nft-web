import React from "react";

import HeaderWidget from "@/components/header/headerWidget";
import FooterWidget from "@/components/footer/footerWidget";
import TitleWidget from "@/components/title/titleWidget";

import FormWrapWidget from "@/components/form/formWrapWidget";
import LabelWidget from "@/components/form/labelWidget";
import InputWidget from "@/components/form/inputWidget";
import BtnWidget from "@/components/form/btnWidget";

import styles from "./adminIndex.less";

function AdminIndex() {
  return (
    <div className={styles.adminIndex}>
      <HeaderWidget />
      <h2>只有管理员才能使用哦</h2>
      <TitleWidget label="操作" />
      <div className={styles.contianer}>
        <FormWrapWidget>
          <TitleWidget label="approve" />
          <LabelWidget
            label="to"
            children={
              <InputWidget value="" type="text" placeholder="to  address" />
            }
          />
          <LabelWidget
            label="tokenId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="tokenId  uint256"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="disableAdmin" subLable="删除管理员" />
          <LabelWidget
            label="_addr"
            children={
              <InputWidget value="" type="text" placeholder="_addr  address" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="enableAdmin" subLable="添加管理员" />
          <LabelWidget
            label="_addr"
            children={
              <InputWidget value="" type="text" placeholder="_addr  address" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="flipSaleState" subLable="NFT 开关" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="freeze" subLable="冻结当前选定tokenId" />
          <LabelWidget
            label="tokenId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="tokenId  uint256"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="freezeAll" subLable="冻结所有tokenId" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="mintDBRs" subLable="购买DBR" />
          <LabelWidget
            label="numberOfTokens"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="numberOfTokens  uint256"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="renounceOwnership" subLable="放弃所有权" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="reserveDBRs" />
          <LabelWidget
            label="receipt"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="receipt  address"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="safeTransferFrom" subLable="tokenid 划转" />
          <LabelWidget
            label="from"
            children={
              <InputWidget value="" type="text" placeholder="from  address" />
            }
          />
          <LabelWidget
            label="to"
            children={
              <InputWidget value="" type="text" placeholder="to  address" />
            }
          />
          <LabelWidget
            label="tokenId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="tokenId  uint246"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="setAdminFeeRatio" subLable="设置管理费比率" />
          <LabelWidget
            label="_feeRatio"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="_feeRatio  uint256"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="setApprovalForAll" />
          <LabelWidget
            label="operator"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="operator  address"
              />
            }
          />
          <LabelWidget
            label="approved"
            children={
              <InputWidget value="" type="text" placeholder="approved  bool" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="setBaseTokenURI" subLable="设置BaseTokenURI" />
          <LabelWidget
            label="baseTokenURI_"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="baseTokenURI_  string"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget
            label="setMaxPurchase"
            subLable="设置单个钱包最大持有量"
          />
          <LabelWidget
            label="_value"
            children={
              <InputWidget value="" type="text" placeholder="_value  uint256" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="setMaxTokenAmount" subLable="设置NFT最大量" />
          <LabelWidget
            label="_value"
            children={
              <InputWidget value="" type="text" placeholder="_value  uint256" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="setPrice" subLable="设置NFT单个价格（wei）" />
          <LabelWidget
            label="_price"
            children={
              <InputWidget value="" type="text" placeholder="_price  uint256" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="setReserveAmount" subLable="设置NFT预留数量" />
          <LabelWidget
            label="_reserveAmount"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="_reserveAmount  uint256"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="setTokenURI" subLable="设置TokenURI" />
          <LabelWidget
            label="tokenId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="tokenId  uint256"
              />
            }
          />
          <LabelWidget
            label="_tokenURI"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="_tokenURI  string"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          {/*         
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _setOwner(newOwner); 
        */}
          <TitleWidget label="transferOwnership" />
          <LabelWidget
            label="newOwner"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="newOwner  address"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="withdraw" subLable="提币" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FooterWidget />
      </div>
      <TitleWidget label="查询" />
      <div className={styles.contianer}>
        <FormWrapWidget>
          <TitleWidget label="adminFeeRatio" subLable="某个地址的分红比例" />
          <LabelWidget
            label="admin"
            children={
              <InputWidget value="" type="text" placeholder="admin  address" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="allFrozen" subLable="nft是否开启" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget
            label="balanceOf"
            subLable="某个地址nft持有的所有tokenId"
          />
          <LabelWidget
            label="owner"
            children={
              <InputWidget value="" type="text" placeholder="owner  address" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="baseTokenURL" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="DBRPrice" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="DBRSTotalSupply" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="getApproved" />
          <LabelWidget
            label="tokenId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="tokenId  uint256"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          {/* _operatorApprovals[owner][operator]; */}
          <TitleWidget label="isApprovedForAll" />
          <LabelWidget
            label="owner"
            children={
              <InputWidget value="" type="text" placeholder="owner  address" />
            }
          />
          <LabelWidget
            label="operator"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="operator  address"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="maxDBRPurchase" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="maxDBRs" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="name" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="owner" subLable="当前合约持有者" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="ownerOf" subLable="当前tokenId持有者" />
          <LabelWidget
            label="tokenId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="tokenId  address"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="reserveAmount" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="reserveAmount" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
        <FormWrapWidget>
          <TitleWidget label="saleIsActive" subLable="NFT是否可交易" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="supportsInterface" />
          <LabelWidget
            label="interfaceId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="interfaceId  bytes4"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="symbol" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget
            label="tokenByIndex"
            subLable="tokenId index的token URL"
          />
          <LabelWidget
            label="index"
            children={
              <InputWidget value="" type="text" placeholder="index  uint256" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="tokenOfOwnerByIndex" subLable="查询tokenId" />
          <LabelWidget
            label="owner"
            children={
              <InputWidget value="" type="text" placeholder="owner  address" />
            }
          />
          <LabelWidget
            label="index"
            children={
              <InputWidget value="" type="text" placeholder="index  uint256" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="tokenURI" subLable=" 查询tokenURI" />
          <LabelWidget
            label="tokenId"
            children={
              <InputWidget
                value=""
                type="text"
                placeholder="tokenId  uint256"
              />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="totalSupply" subLable="剩余" />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>

        <FormWrapWidget>
          <TitleWidget label="walletOfOwner" subLable="所查地址的所有tokenId" />
          <LabelWidget
            label="_owner"
            children={
              <InputWidget value="" type="text" placeholder="_owner  address" />
            }
          />
          <BtnWidget label="transact" onClick={() => {}} />
        </FormWrapWidget>
      </div>
    </div>
  );
}
export default AdminIndex;
