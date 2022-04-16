maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.Low, function () {
    maqueen.motorStop(maqueen.Motors.M2)
})
maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.High, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.High, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.Low, function () {
    maqueen.motorStop(maqueen.Motors.M1)
})
