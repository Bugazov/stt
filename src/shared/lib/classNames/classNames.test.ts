import { classNames } from "shared/lib/classNames/classNames"

describe("classNmaes",()=>{
    test("with only first param",()=>{
        expect(classNames("someClass")).toBe("someClass")
    })
    test("with additional class",()=>{
        const expected = "someClass class1 class2"
        expect(classNames("someClass",{},["class1","class2"])).toBe(expected)
    })
    test("with mods class true",()=>{
        const expected = "someClass class1 class2 class3 class4"
        expect(classNames("someClass",{"class3":true,"class4":true},["class1","class2"])).toBe(expected)
    })
    test("with mods class false",()=>{
        const expected = "someClass class1 class2"
        expect(classNames("someClass",{"class3":false,"class4":false},["class1","class2"])).toBe(expected)
    })
    test("with mods class undefined",()=>{
        const expected = "someClass class1 class2"
        expect(classNames("someClass",{"class3":undefined},["class1","class2"])).toBe(expected)
    })
}) 
