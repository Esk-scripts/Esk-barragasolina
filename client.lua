AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then
        return
    end
    carHudLoop()
end)

RegisterNetEvent('esx:playerLoaded', function()
    carHudLoop()
end)


function carHudLoop()
    CreateThread(function()
       local sleepThread = 1000
        while (true) do
            local playerPed = GetPlayerPed(-1)
            local vehicle = GetVehiclePedIsIn(playerPed)
            local IsPedInAnyVehicle = IsPedInAnyVehicle(playerPed)
            local fuelLevel  = 0


            if (IsPedInAnyVehicle) then
                fuelLevel = GetVehicleFuelLevel(vehicle)
                sleepThread = 170
            else
                fuelLevel  = 0
            end

            SendNUIMessage({
                type = 'carhud:update',
                isInVehicle = IsPedInAnyVehicle,
                fuel = fuelLevel,
            })
            Wait(sleepThread)
        end
    end)
end