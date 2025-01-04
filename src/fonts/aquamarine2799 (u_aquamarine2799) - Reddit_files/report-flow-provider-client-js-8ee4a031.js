import{_ as t,e,r,aB as s,i0 as o,J as i,q as a,n,g as c,aD as p,k as l}from"./shell-091aa980.js";import"./report-flow-99ebad10.js";import"./report-flow-provider-ccbe32a4.js";import{s as d,x as u}from"./icon-bd54b9fa.js";import{c as h,g as m,a as b,b as f}from"./submit-report-helper-7bd14ed8.js";import{F as y}from"./types-1cf35b8e.js";import"./faceplate-modal-0f0c31b7.js";import"./faceplate-bottom-sheet-eb6763cf.js";import"./helpers-093c3384.js";import"./a-d374470c.js";import"./faceplate-radio-input-98a938f6.js";import"./checked-input-element-a967e016.js";import"./faceplate-input-1d78f8a0.js";import"./input-element-422d9934.js";import"./form-common-utils-52bc3cfc.js";import"./faceplate-progress-5f96291b.js";import"./faceplate-text-input-5cdbed8e.js";import"./live-30a71da3.js";import"./text-input-30412a36.js";import"./shreddit-slotter-e6e32b0d.js";import"./faceplate-textarea-input-1ec3aa59.js";import"./faceplate-switch-input-41e8fecd.js";import"./user-blocking-e25a07b5.js";import"./common-ui-strings-5722cbef.js";import"./rpl-dialog-sheet-13e5af3d.js";import"./rpl-bottom-sheet-f4dacb5b.js";import"./TinyGesture-6f7cc1aa.js";import"./contains-1042b204.js";let g=class extends d{constructor(){super(...arguments),this.pubsub=new r(this),this._activateFeature=async t=>s(t),this.openCTL=async({authorName:t,thingId:e,userDetailType:r})=>{const s=r?{userDetailType:r}:void 0;await this._activateFeature({name:o,renderMode:i.Contents,routeParams:{authorName:t,thingId:e},queryParams:{...s}})}}connectedCallback(){super.connectedCallback(),this.pubsub.subscribe(a.CTLReportInit,this.openCTL,!1)}disconnectedCallback(){this.pubsub.unsubscribe(a.CTLReportInit,this.openCTL),super.disconnectedCallback()}render(){return u`<slot></slot>`}};g=t([e("ctl-reporting-provider")],g);let j=class extends d{constructor(){super(...arguments),this.closeCTLModal=()=>{this.ctlModal?.hide(),this.dispatchEvent(c("report-flow-close"))}}get ctlModal(){return document.querySelector("rpl-dialog#ctl-report-content-modal")}get ctlModalContents(){return document.querySelector("#ctl-report-content-modal rpl-modal-card")}};j=t([e("base-ctl-component")],j);let T=class extends j{constructor(){super(...arguments),this.requestClientGQL=p,this.showThankYou=()=>{const t=c("shreddit-slotter-set-slot-name",{slotName:"thankyou"});this.ctlModalContents?.querySelector("shreddit-slotter")?.dispatchEvent(t)},this.reportRequest=async(t,e)=>{const r=f[t];if(!r)throw new Error("No corresponding gql operation for the item type provided");try{const t=await this.requestClientGQL({operation:r,variables:{input:e}});return h(t)?t:void 0}catch(t){throw new Error("Error calling the gql report operation")}},this.submitCTLReport=async()=>{if(!this.thingId)return;const t=m(this.thingId);try{const e=b(t,this.thingId,{REPORT_REASONS:"SELF_HARM",...this.userDetailType?{USER_DETAILS:this.userDetailType}:{}});if(!await this.reportRequest(t,e))throw new Error;this.showThankYou(),this.dispatchEvent(c("report-tracking",{reportFlow:{flowOptionSelected:y.REDDITCARES_BUTTON}}))}catch(t){this.dispatchEvent(c("faceplate-alert",{level:l.error,message:"An error occurred while submitting your report. Wait a bit, and try again."}))}},this.firstUpdated=()=>{this.querySelector("#ctl-yes-button")?.addEventListener("click",this.submitCTLReport)}}render(){return u`<slot></slot>`}};t([n({type:String,attribute:"author-name"})],T.prototype,"authorName",void 0),t([n({type:String,attribute:"thing-id"})],T.prototype,"thingId",void 0),t([n({type:String,attribute:"user-detail-type"})],T.prototype,"userDetailType",void 0),T=t([e("ctl-step-one")],T);let w=class extends j{constructor(){super(...arguments),this.firstUpdated=()=>{this.okButton?.addEventListener("click",this.closeCTLModal)}}get okButton(){return this.querySelector("#ctl-ok-button")}render(){return u`<slot></slot>`}};w=t([e("ctl-step-two")],w);
//# sourceMappingURL=report-flow-provider-client-js-8ee4a031.js.map
