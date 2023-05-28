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
</TestSuiteEntity>
