import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.maximizeWindow()

WebUI.navigateToUrl('https://cicd-demo.herokuapp.com/')

WebUI.click(findTestObject('Object Repository/Page_Trang ch/a_Khm ph'))

WebUI.click(findTestObject('Object Repository/Page_Kham pha/h3_Nhn vin Y t - PTLC CP'))

WebUI.click(findTestObject('Object Repository/Page_Nhn vin Y t - PTLC CP/button_NG TUYN'))

WebUI.click(findTestObject('Object Repository/Page_Danh sch  ng tuyn/button_Xin cho,                  username'))

WebUI.click(findTestObject('Object Repository/Page_Danh sch  ng tuyn/a_ng xut'))

WebUI.click(findTestObject('Object Repository/Page_Trang ch/a_ng nhp'))

WebUI.setText(findTestObject('Object Repository/Page_ng nhp/input_ng nhp_username'), '123456')

WebUI.setText(findTestObject('Object Repository/Page_ng nhp/input_ng nhp_password'), '123456')

WebUI.click(findTestObject('Object Repository/Page_Trang ch/a_Cng vic ca ti'))

WebUI.click(findTestObject('Object Repository/Page_Cng vic ca ti/h3_Th K Y Khoa'))

WebUI.click(findTestObject('Object Repository/Page_Cng vic ca ti/h3_Nhn vin Y t - PTLC CP'))

WebUI.click(findTestObject('Object Repository/Page_Danh sch ng vin/i_ng tuyn vo_bi bi-check'))

WebUI.click(findTestObject('Object Repository/Page_Danh sch ng vin/i_ng tuyn vo_bi bi-check'))

WebUI.click(findTestObject('Object Repository/Page_Danh sch ng vin/i_ng tuyn vo_bi bi-check'))

