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

WebUI.click(findTestObject('Object Repository/Page_Trang ch/a_ng nhp'))

WebUI.setText(findTestObject('Object Repository/Page_ng nhp/input_ng nhp_username'), '123456')

WebUI.setText(findTestObject('Object Repository/Page_ng nhp/input_ng nhp_password'), '123456')

WebUI.click(findTestObject('Object Repository/Page_ng nhp/button_ng nhp'))

WebUI.click(findTestObject('Object Repository/Page_Trang ch/a_Cng vic ca ti'))

WebUI.click(findTestObject('Object Repository/Page_Cng vic ca ti/i_a ch_bi bi-pen'))

WebUI.setText(findTestObject('Object Repository/Page_Chnh sa cng vic/input_Tn cng vic_name'), 'AAA')

WebUI.setText(findTestObject('Object Repository/Page_Chnh sa cng vic/textarea_Bn tri cy ti ch Th c t th 2 n th 6_ac92c3'), 
    'BBB')

WebUI.setText(findTestObject('Object Repository/Page_Chnh sa cng vic/input_VN_salary'), '123')

WebUI.setText(findTestObject('Object Repository/Page_Chnh sa cng vic/textarea_ng s 3, Linh ng, Th c, Thnh ph H Ch Minh'), 
    'CCC')

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Chnh sa cng vic/select_Th c                    Qun 1       _31e309'), 
    'Thủ Đức', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Chnh sa cng vic/select_Th c                    Qun 1       _31e309'), 
    'Quận 1', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Chnh sa cng vic/select_Phc v                    Vit lch    _d924aa'), 
    'Phục vụ', true)

WebUI.click(findTestObject('Object Repository/Page_Chnh sa cng vic/button_LU'))

