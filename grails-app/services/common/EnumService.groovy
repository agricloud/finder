package common

import grails.converters.JSON

class EnumService {

	def messageSource

	def values(enumClass){//ex :foodprint.Country
		def className = enumClass.replace('foodprint.','')
		className = className[0].toLowerCase() + className[1..-1]
		println "3::"+className

		def enumClassAry = enumClass.values()
		def enumClassJson = [:]
		Object[] obj
        enumClassAry.each{
        	enumClassJson.title = messageSource.getMessage(className+'.'+it+'.label',obj, Locale.getDefault())
        	enumClassJson.name = it
        }

        enumClassJson
	}

	def name(enumInstance){//ex: Country country
		println "1::"+enumInstance.class
		def className=enumInstance.class
		className = className[0].toLowerCase() + className[1..-1]
		println "2::"+className
		def enumInstanceJson =[:]
		Object[] obj 
		enumInstanceJson.name = enumInstance.name()
		enumInstanceJson.title = messageSource.getMessage(className+'.'+enumInstance.name()+'.label',obj, Locale.getDefault())

		enumInstanceJson
	}
}