# CS 174A Assignment 2

### Jennifer Liaw 004454638

#### Please grade the version tagged v1.0
    Controls:
      R - reset
      UP - rotating heading up by N degrees
      DOWN - rotating heading down by N
      LEFT - rotating heading left by N
      RIGHT - rotating heading right by N
      1~9 - set N
      A - attach camera to planet 2
      D - detach camera from planet 2
        (UDLR also works while camera is attached to planet)
    To fly around solar system:
      SPACE - move camera forward by N units
      M - move camera backward by N
      , - move camera left by N
      . - move camera right by N

#### What was implemented?
    (1) Include a README.md and comments
    (2) Display WebGL canvas without error
    (3) Function for sphere geometry
    (4) Generate normal functions in sphere function
    (5) Create a small solar system

    (6) Up and down keys control position of camera along y-axis
    (7) Left and right keys control the heading of the camera azimuth
    (8) 'ijkm' keys move forward, left, right, and backward respectively relative to the camera's current heading. 'r' key resets the view to the start position
    (9) 'n' and 'w' keys narrow/widen the field of view
    (10) '+' key toggles the display of a crosshair in white

#### Extra Credit
    (1) Instance each of the cubes from the same geometry data
    (2) Implement the cube as a single triangle strip primitive
    (3) Continuously rotate and scale each of the cubes while the application is running.
