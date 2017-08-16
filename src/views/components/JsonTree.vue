<template>
  <div class="animated fadeIn">

          <Row>
        <Col :md="6" >
           
           <div style="" class="doc-header">

<Collapse v-model="now_show_panel" accordion> 
                     <Panel name="1">
                          maxDepth:1
                          <p slot="content">
   <tree-view :data="sampleData1" :options="{maxDepth: 1}"></tree-view>

                          </p>
                      </Panel>
                      <Panel name="2" >
                             maxDepth:2
                          <p slot="content">
                                  <tree-view :data="sampleData1" :options="{maxDepth: 2}"></tree-view>
                          </p>
                      </Panel>
                      <Panel name="3">
                          maxDepth:3
                          <p slot="content">
                                  <tree-view :data="sampleData1" :options="{maxDepth: 3}"></tree-view>
                          </p>
                      </Panel>
                     
                  </Collapse>

            </div>
            <div style="" class="doc-content">
                <h5>JSON展示列表</h5>

        <p>配合Collapse 折叠面板很轻易的就可以展示又臭又长的json字符串</p>
        <p>通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。</p>
            </div>
             
        </Col>


        <Col :md="6">
           
<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>

<span style="color: #062873; font-weight: bold">&lt;Collapse</span> <span style="color: #4070a0"><span>v-model=</span>&quot;<span>value</span>&quot;</span> <span >accordion</span><span style="color: #062873; font-weight: bold">&gt;</span> 
                     <span style="color: #062873; font-weight: bold">&lt;Panel</span> <span style="color: #4070a0">name=&quot;1&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
                          maxDepth:1
                          <span style="color: #062873; font-weight: bold">&lt;p</span> <span style="color: #4070a0">slot=&quot;content&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
   <span style="color: #062873; font-weight: bold">&lt;tree-view</span> <span style="color: #4070a0">:data=&quot;sampleData1&quot;</span> <span style="color: #4070a0">:options=&quot;{maxDepth: 1}&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/tree-view&gt;</span>

                          <span style="color: #062873; font-weight: bold">&lt;/p&gt;</span>
                      <span style="color: #062873; font-weight: bold">&lt;/Panel&gt;</span>
                      <span style="color: #062873; font-weight: bold">&lt;Panel</span> <span style="color: #4070a0">name=&quot;2&quot;</span> <span style="color: #062873; font-weight: bold">&gt;</span>
                             maxDepth:2
                          <span style="color: #062873; font-weight: bold">&lt;p</span> <span style="color: #4070a0">slot=&quot;content&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
                                  <span style="color: #062873; font-weight: bold">&lt;tree-view</span> <span style="color: #4070a0">:data=&quot;sampleData1&quot;</span> <span style="color: #4070a0">:options=&quot;{maxDepth: 2}&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/tree-view&gt;</span>
                          <span style="color: #062873; font-weight: bold">&lt;/p&gt;</span>
                      <span style="color: #062873; font-weight: bold">&lt;/Panel&gt;</span>
                      <span style="color: #062873; font-weight: bold">&lt;Panel</span> <span style="color: #4070a0">name=&quot;3&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
                          maxDepth:3
                          <span style="color: #062873; font-weight: bold">&lt;p</span> <span style="color: #4070a0">slot=&quot;content&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
                                  <span style="color: #062873; font-weight: bold">&lt;tree-view</span> <span style="color: #4070a0">:data=&quot;sampleData1&quot;</span> <span style="color: #4070a0">:options=&quot;{maxDepth: 3}&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/tree-view&gt;</span>
                          <span style="color: #062873; font-weight: bold">&lt;/p&gt;</span>
                      <span style="color: #062873; font-weight: bold">&lt;/Panel&gt;</span>
                     
                  <span style="color: #062873; font-weight: bold">&lt;/Collapse&gt;</span>

<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>

export default {
  name: &#39;buttons&#39;,

   data () {
            return {
                value:1,
                 sampleData1: {&quot;medications&quot;:[{&quot;aceInhibitors&quot;:[{&quot;name&quot;:&quot;lisinopril&quot;,&quot;strength&quot;:&quot;10 mg Tab&quot;,&quot;dose&quot;:&quot;1 tab&quot;,&quot;route&quot;:&quot;PO&quot;,&quot;sig&quot;:&quot;daily&quot;,&quot;pillCount&quot;:&quot;#90&quot;,&quot;refills&quot;:&quot;Refill 3&quot;}],&quot;antianginal&quot;:[{&quot;name&quot;:&quot;nitroglycerin&quot;,&quot;strength&quot;:&quot;0.4 mg Sublingual Tab&quot;,&quot;dose&quot;:&quot;1 tab&quot;,&quot;route&quot;:&quot;SL&quot;,&quot;sig&quot;:&quot;q15min PRN&quot;,&quot;pillCount&quot;:&quot;#30&quot;,&quot;refills&quot;:&quot;Refill 1&quot;}],&quot;anticoagulants&quot;:[{&quot;name&quot;:&quot;warfarin sodium&quot;,&quot;strength&quot;:&quot;3 mg Tab&quot;,&quot;dose&quot;:&quot;1 tab&quot;,&quot;route&quot;:&quot;PO&quot;,&quot;sig&quot;:&quot;daily&quot;,&quot;pillCount&quot;:&quot;#90&quot;,&quot;refills&quot;:&quot;Refill 3&quot;}],&quot;betaBlocker&quot;:[{&quot;name&quot;:&quot;metoprolol tartrate&quot;,&quot;strength&quot;:&quot;25 mg Tab&quot;,&quot;dose&quot;:&quot;1 tab&quot;,&quot;route&quot;:&quot;PO&quot;,&quot;sig&quot;:&quot;daily&quot;,&quot;pillCount&quot;:&quot;#90&quot;,&quot;refills&quot;:&quot;Refill 3&quot;}],&quot;diuretic&quot;:[{&quot;name&quot;:&quot;furosemide&quot;,&quot;strength&quot;:&quot;40 mg Tab&quot;,&quot;dose&quot;:&quot;1 tab&quot;,&quot;route&quot;:&quot;PO&quot;,&quot;sig&quot;:&quot;daily&quot;,&quot;pillCount&quot;:&quot;#90&quot;,&quot;refills&quot;:&quot;Refill 3&quot;}],&quot;mineral&quot;:[{&quot;name&quot;:&quot;potassium chloride ER&quot;,&quot;strength&quot;:&quot;10 mEq Tab&quot;,&quot;dose&quot;:&quot;1 tab&quot;,&quot;route&quot;:&quot;PO&quot;,&quot;sig&quot;:&quot;daily&quot;,&quot;pillCount&quot;:&quot;#90&quot;,&quot;refills&quot;:&quot;Refill 3&quot;}]}],&quot;labs&quot;:[{&quot;name&quot;:&quot;Arterial Blood Gas&quot;,&quot;time&quot;:&quot;Today&quot;,&quot;location&quot;:&quot;Main Hospital Lab&quot;},{&quot;name&quot;:&quot;BMP&quot;,&quot;time&quot;:&quot;Today&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;},{&quot;name&quot;:&quot;BNP&quot;,&quot;time&quot;:&quot;3 Weeks&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;},{&quot;name&quot;:&quot;BUN&quot;,&quot;time&quot;:&quot;1 Year&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;},{&quot;name&quot;:&quot;Cardiac Enzymes&quot;,&quot;time&quot;:&quot;Today&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;},{&quot;name&quot;:&quot;CBC&quot;,&quot;time&quot;:&quot;1 Year&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;},{&quot;name&quot;:&quot;Creatinine&quot;,&quot;time&quot;:&quot;1 Year&quot;,&quot;location&quot;:&quot;Main Hospital Lab&quot;},{&quot;name&quot;:&quot;Electrolyte Panel&quot;,&quot;time&quot;:&quot;1 Year&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;},{&quot;name&quot;:&quot;Glucose&quot;,&quot;time&quot;:&quot;1 Year&quot;,&quot;location&quot;:&quot;Main Hospital Lab&quot;},{&quot;name&quot;:&quot;PT/INR&quot;,&quot;time&quot;:&quot;3 Weeks&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;},{&quot;name&quot;:&quot;PTT&quot;,&quot;time&quot;:&quot;3 Weeks&quot;,&quot;location&quot;:&quot;Coumadin Clinic&quot;},{&quot;name&quot;:&quot;TSH&quot;,&quot;time&quot;:&quot;1 Year&quot;,&quot;location&quot;:&quot;Primary Care Clinic&quot;}],&quot;imaging&quot;:[{&quot;name&quot;:&quot;Chest X-Ray&quot;,&quot;time&quot;:&quot;Today&quot;,&quot;location&quot;:&quot;Main Hospital Radiology&quot;},{&quot;name&quot;:&quot;Chest X-Ray&quot;,&quot;time&quot;:&quot;Today&quot;,&quot;location&quot;:&quot;Main Hospital Radiology&quot;},{&quot;name&quot;:&quot;Chest X-Ray&quot;,&quot;time&quot;:&quot;Today&quot;,&quot;location&quot;:&quot;Main Hospital Radiology&quot;}]}
            }
        },
 
}


<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>


        </Col>








    </Row> 


</div>
</template>

<script>

export default {
  name: 'buttons',

   data () {
            return {
                loading: false,
                loading2: false,
                now_show_panel:"1",
                 sampleData1: {"medications":[{"aceInhibitors":[{"name":"lisinopril","strength":"10 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"antianginal":[{"name":"nitroglycerin","strength":"0.4 mg Sublingual Tab","dose":"1 tab","route":"SL","sig":"q15min PRN","pillCount":"#30","refills":"Refill 1"}],"anticoagulants":[{"name":"warfarin sodium","strength":"3 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"betaBlocker":[{"name":"metoprolol tartrate","strength":"25 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"diuretic":[{"name":"furosemide","strength":"40 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"mineral":[{"name":"potassium chloride ER","strength":"10 mEq Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}]}],"labs":[{"name":"Arterial Blood Gas","time":"Today","location":"Main Hospital Lab"},{"name":"BMP","time":"Today","location":"Primary Care Clinic"},{"name":"BNP","time":"3 Weeks","location":"Primary Care Clinic"},{"name":"BUN","time":"1 Year","location":"Primary Care Clinic"},{"name":"Cardiac Enzymes","time":"Today","location":"Primary Care Clinic"},{"name":"CBC","time":"1 Year","location":"Primary Care Clinic"},{"name":"Creatinine","time":"1 Year","location":"Main Hospital Lab"},{"name":"Electrolyte Panel","time":"1 Year","location":"Primary Care Clinic"},{"name":"Glucose","time":"1 Year","location":"Main Hospital Lab"},{"name":"PT/INR","time":"3 Weeks","location":"Primary Care Clinic"},{"name":"PTT","time":"3 Weeks","location":"Coumadin Clinic"},{"name":"TSH","time":"1 Year","location":"Primary Care Clinic"}],"imaging":[{"name":"Chest X-Ray","time":"Today","location":"Main Hospital Radiology"},{"name":"Chest X-Ray","time":"Today","location":"Main Hospital Radiology"},{"name":"Chest X-Ray","time":"Today","location":"Main Hospital Radiology"}]}
            }
        },
 
}


</script>



<style type="text/css">
 .num{ height:100px;overflow:hidden;/* width:430px; */position:relative;}
.min_pic{ padding-top:0px; /*width:500px;*/height:100px;margin:10px auto 0 auto}
.num ul{ position:absolute; left:0; top:0; }
.num ul li{ width:100px; height:100px; margin-right:5px; padding:1px;}
.num ul li.on a img{ border:4px solid #59b1f5; padding:0;}
.prev_btn1{ width:20px; text-align:center; height:100px; line-height: 100px; margin-right:15px; cursor:pointer; float:left;border: 1px solid #cacaca;}
.next_btn1{  width:20px; text-align:center; height:100px; cursor:pointer; z-index: 10000;position: absolute;right: 0;line-height: 100px;top:32px;border: 1px solid #cacaca;}
.prev_btn1:hover{
        border:1px solid #379edf;
}
.next_btn1:hover{
        border:1px solid #379edf;
}

</style>



