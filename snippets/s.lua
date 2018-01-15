local module = require("someModule.subModule").subItem


-- comments
-- TODO:
-- FIXME:
-- NOTE:


do
    local a = 4
    local b = 5.4
    local c = {true, false, nil}  -- TODO: tokenizer doesn't recognize punctuation

    if 4 > 3 then
        print("a")
    elseif 2 > 3 then
        print("b")
    else
        print("c")
    end

    while false do
        print("loop")
    end

    do
        print("until")
    until true

    for i=1,10 do
        print("concat" .. i)
    end
end


do
    local a = false and true or not (5 >= 3)
    local b = (3 // 1) ** 2 + 8 * (93 / 2.3)
    local c = "line" .. 35 .. "a"
end


do
    string.find('banana', 'lua')
    table.insert({}, 4)
    math.sin(5)
    setmetatable({}, {})
end


do
    function globalFunc() end
    local function localFunc() end
    local f = function() end

    local function varFunc(a, b, ...)
        return a + localFunc(b, ...)
    end

    varFunc(table.unpack({1, 2, 3, 4, 5}))

    localFunc{a=3, b="string"}
end


do
    local Class = {v=4}
    function Class.method(self, a, b)
        return self.v + a + b
    end
    function Class:sameMethod(a, b)
        return self.v + a + b
    end
    Class:method(2, 3)
end


do
    local a = {1, 2, 3}
    for i, v in ipairs(a) do end
    local m = {
        a="item",
        ["tricky-key"]=8,
        [8]=false
    }
    for k, v in pairs(m) do end
end


return {a=3}
