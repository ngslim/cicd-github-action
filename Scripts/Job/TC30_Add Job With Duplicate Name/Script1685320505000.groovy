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

WebUI.navigateToUrl('https://cicd-demo.herokuapp.com/')

WebUI.click(findTestObject('Object Repository/Page_Trang ch/a_ng nhp'))

WebUI.setText(findTestObject('Object Repository/Page_ng nhp/input_ng nhp_username'), '19120272')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_ng nhp/input_ng nhp_password'), 'fBm02xO4HSroITAu/Mh6hQ==')

WebUI.click(findTestObject('Object Repository/Page_ng nhp/button_ng nhp'))

WebUI.click(findTestObject('Object Repository/Page_Trang ch/a_NG VIC'))

WebUI.setText(findTestObject('Object Repository/Page_To cng vic/input_Tn cng vic_name'), 'Grand Theft Auto V')

WebUI.setText(findTestObject('Object Repository/Page_To cng vic/textarea_M t_description'), 'mô tả')

WebUI.setText(findTestObject('Object Repository/Page_To cng vic/input_VN_salary'), '12345')

WebUI.setText(findTestObject('Object Repository/Page_To cng vic/textarea_a ch_address'), '123')

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_To cng vic/select_Phc v                    Tr l bn hng_714e3f'), 
    'Nghệ thuật', true)

WebUI.click(findTestObject('Object Repository/Page_To cng vic/button_NG'))

