test('proto geom', () => {
    /**
     *
     * @param ext extent
     * @param f formatSize
     * @returns {Array}
     */
    const formatFromView = (ext, f) => {
        const extSize = [ext[2] - ext[0], ext[3] - ext[1]]
        const mid = [(ext[2] - ext[0]) / 2, (ext[3] - ext[1]) / 2]
        const ext2f = (ext, f, i) => ext[i] / f[i]
        const scale = Math.min(ext2f(extSize, f, 0), ext2f(extSize, f, 1))
        return [mid[0] - scale * f[0] / 2,
            mid[1] - scale * f[1] / 2,
            mid[0] + scale * f[0] / 2,
            mid[1] + scale * f[1] / 2
        ]
    }
    const inExtent = [[0, 0, 400, 1600],[0, 0, 400, 400],[0, 0, 400, 100]]
    const expected = [[0, 0, 400, 1600],[150, 0, 250, 400],[187.5, 0, 212.5, 100]]
    inExtent.forEach((v,i)=>{
        const res = formatFromView(v, [50, 200])
        expect(res).toEqual(expected[i])
    })


});

