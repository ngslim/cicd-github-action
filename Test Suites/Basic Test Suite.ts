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
</TestSuiteEntity>
