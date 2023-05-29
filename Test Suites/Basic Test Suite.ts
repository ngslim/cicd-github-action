<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Basic Test Suite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>84d66931-b66b-4a70-a637-88c4aa96d6b7</testSuiteGuid>
   <testCaseLink>
      <guid>e0199bcc-d2ad-4f99-ba0e-1a75a624cbbb</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/TC01_Get User Profile</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>5acbd23d-7680-4ac2-adb0-e98a089cf896</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>67a0812c-9338-47b9-947b-9a1264ed37da</id>
         <masked>false</masked>
         <name>username</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Login/TC02_Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>26a7ec71-571d-4f78-8469-7513754b9efc</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/LoginCredentials</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>26a7ec71-571d-4f78-8469-7513754b9efc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>67a0812c-9338-47b9-947b-9a1264ed37da</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>26a7ec71-571d-4f78-8469-7513754b9efc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>271a0e6f-d48e-4c5e-98fa-7ffa8a19eded</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>425c60da-4dcd-43ef-a9bf-aa76e113062a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC03_Register New Account</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>de2a8a01-c740-4771-b7eb-543cc7edbfa3</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/RegisterCredentials (1)</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>cb350f60-b6fa-4381-bb64-112c15399156</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Email</value>
         <variableId>5cbe972e-b73b-4249-a9f3-65aba298160c</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>15598102-dcca-4d57-8d4f-56247ae6dcf9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>First Name</value>
         <variableId>34738fc1-bf08-49bd-a215-cdfa5d1cff6b</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Last Name</value>
         <variableId>ce1d283d-c6c6-444a-b7e6-21af08c0549a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Address</value>
         <variableId>b88731bb-4719-4d96-8c7d-3a448e26a956</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Company</value>
         <variableId>b72b38c3-f57d-49a5-9234-193724b5938d</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Phone </value>
         <variableId>e3f2fafa-f831-4ac2-b1c9-ba3722b8deba</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de2a8a01-c740-4771-b7eb-543cc7edbfa3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Dob</value>
         <variableId>4e7a2709-735c-456d-9194-4be5c61e8c6b</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>feb6a181-2bbb-42fd-9171-2c017f502347</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC04_Register Existed Account</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>49336d04-024f-4c73-b1fb-0549b90ba3a4</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/RegisterCredentials (1)</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>49336d04-024f-4c73-b1fb-0549b90ba3a4</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>6e18aaf7-627e-424f-a53e-4f91a3a27ea7</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>49336d04-024f-4c73-b1fb-0549b90ba3a4</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Email</value>
         <variableId>06e2d6d4-0cc3-4dcc-8190-19332ea751d9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>49336d04-024f-4c73-b1fb-0549b90ba3a4</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>9e1fa172-0fcb-4d4f-aad8-b9b9f6958c37</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>480d950a-8837-402e-bc5d-ac7ce9d70e15</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC05_Register Password Mismatch</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>69bba10a-d371-48f0-beb4-472bc880c338</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/RegisterCredentials (1)</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>69bba10a-d371-48f0-beb4-472bc880c338</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>6e18aaf7-627e-424f-a53e-4f91a3a27ea7</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>69bba10a-d371-48f0-beb4-472bc880c338</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Email</value>
         <variableId>06e2d6d4-0cc3-4dcc-8190-19332ea751d9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>69bba10a-d371-48f0-beb4-472bc880c338</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>9e1fa172-0fcb-4d4f-aad8-b9b9f6958c37</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>a45f6358-e213-4bce-a4a6-559513810ae4</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC06_Add Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>c4b6a618-6da0-43eb-b4da-9e9b278c6902</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC07_Edit Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>ed05f942-8789-4c2b-b505-efe6eb24c49c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC08_Delete Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>255e2b48-e637-4ee9-b191-b58d1aa9deeb</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/TC09_Update User Profile</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>7906a96c-c1a1-4a6e-940d-6fdc8c4a499a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC10_Apply Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>6bf31b0a-6149-4a55-9ebb-67e89ca82cbd</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Explore/TC11_View Job List</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>02a36d3b-55e3-422d-a288-26095eb99cc1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC12_Logout</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>71848de0-2a53-4db9-ad2e-6d8f294348dc</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC13_Apply Own Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>bbf9b7b1-a414-43dd-b35c-9d907a86b86e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC14_Apply Applied Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>064c8e35-b461-42af-8468-f0c9fde2bfb7</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Explore/TC15_Search Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>cc7a91c6-0d47-4428-9d8f-74872d0406bb</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC16_View Own Job List</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>573326c0-8a10-4c11-9c06-468cae9a3b7f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC17_View Apply List</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>2a9d5da8-98f1-4aa4-b4c2-bd44fd6f8450</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC18_Approve Apply</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>167b380b-2e96-4201-9538-61af67cbedd2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC19_Delete Apply</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>22f1a17e-8ed5-4c10-8b7f-14dae7bb857e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Explore/TC20_Search Job With Filter</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>37116be8-8030-4db5-9f69-12bf6f3a61bb</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC21_View Own Applies</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>6e376aac-7384-4e87-a239-3ee3b2577e79</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC22_Apply Without Login</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>483187bc-14bd-4d1f-9697-38e9519104af</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC23_View Own Job List Without Login</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>1a9224c3-1413-4349-91a8-8746a66d59c5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC24_View Own Applies Without Login</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>5e147716-27a5-4c56-bafd-88c138422b96</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Explore/TC25_Search Job With Filter But No Option</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>c62f31fc-8aa8-4385-9f83-91c40c185da7</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC26_Register With No Info</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>6ce3b5dc-710e-45ab-a315-e107b0d7113e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC27_Edit Not Own Job</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>1b0604cb-470c-48df-9d9b-b1c891c54a1c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC028_Access Register Page With An Account</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>a1638374-d3d1-4647-9a93-2caaf39378e6</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>ab359bcc-76bf-4263-b888-616879060591</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>18cb857d-3700-418b-a7b1-053957d6f38f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/TC29_Access Another Profile</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>6f484c15-4682-426e-89be-7579285bbf64</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC30_Add Job With Duplicate Name</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>8fb98adb-9705-4288-a582-87c1e7963d6d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Job/TC31_Add Job With Invalid Salary</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>2a665386-0ae7-4fc5-8a5f-206f4da6aa6d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Apply/TC32_View Apply Job With Invalid ID</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
